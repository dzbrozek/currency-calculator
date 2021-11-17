import formatISO from 'date-fns/formatISO';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { getLastWorkingDay } from 'utils/dates';

type Rate = { currency: string; code: string; bid: number; ask: number };

type ConverterContextType = {
  exchangeRates: Record<string, Rate> | null;
  isLoading: boolean;
  error: string | null;
  exchangeDate: Date;
  setExchangeDate: Dispatch<SetStateAction<Date>>;
  convertFrom: string | null;
  convertTo: string | null;
  convertAmount: number | null;
  convertRate: number | null;
  convert: (from: string, to: string, amount: number) => void;
};

export const ConverterContext =
  React.createContext<ConverterContextType | null>(null);

interface ConverterProviderProps {
  children: React.ReactNode;
}

const ConverterProvider = ({ children }: ConverterProviderProps) => {
  const [exchangeDate, setExchangeDate] = useState(
    getLastWorkingDay(new Date()),
  );
  const [convertFrom, setConvertFrom] = useState<string | null>(null);
  const [convertTo, setConvertTo] = useState<string | null>(null);
  const [convertAmount, setConvertAmount] = useState<number | null>(null);
  const [convertRate, setConvertRate] = useState<number | null>(null);
  const [exchangeRates, setExchangeRates] = useState<Record<
    string,
    Rate
  > | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const convert = useCallback((from: string, to: string, amount: number) => {
    setConvertAmount(amount);
    setConvertTo(to);
    setConvertFrom(from);
  }, []);
  const fetchExchangeRates = useCallback(async (date: Date) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/tables/c/${formatISO(date, {
          representation: 'date',
        })}/?format=json`,
      );
      if (response.ok) {
        const data = (await response.json()) as [
          {
            table: string;
            no: string;
            tradingDate: string;
            effectiveDate: string;
            rates: [Rate];
          },
        ];
        setExchangeRates({
          ...data[0].rates.reduce<Record<string, Rate>>(
            (previousValue, currentValue) => {
              previousValue[currentValue.code] = currentValue;
              return previousValue;
            },
            {},
          ),
          PLN: {
            currency: 'złoty',
            code: 'PLN',
            bid: 1,
            ask: 1,
          },
        });
      } else {
        setError(response.statusText);
      }
    } catch (e) {
      setError(String(e));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRates(exchangeDate);
  }, [fetchExchangeRates, exchangeDate]);

  useEffect(() => {
    // calculate exchange rate
    if (exchangeRates && convertFrom && convertTo && convertAmount) {
      setConvertRate(
        exchangeRates[convertFrom].ask / exchangeRates[convertTo].ask,
      );
    }
  }, [convertAmount, convertFrom, convertTo, exchangeRates]);

  return (
    <ConverterContext.Provider
      value={{
        exchangeRates,
        isLoading,
        error,
        exchangeDate,
        setExchangeDate,
        convertFrom,
        convertTo,
        convertAmount,
        convertRate,
        convert,
      }}
    >
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterProvider;
