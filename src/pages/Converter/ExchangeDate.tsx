import MonthPicker from '@mui/lab/MonthPicker';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import endOfMonth from 'date-fns/endOfMonth';
import formatISO from 'date-fns/formatISO';
import startOfMonth from 'date-fns/startOfMonth';
import startOfYear from 'date-fns/startOfYear';
import subSeconds from 'date-fns/subSeconds';
import useConverter from 'hooks/useConverter';
import { useState } from 'react';
import { getLastWorkingDay } from 'utils/dates';

const ExchangeDate = () => {
  const [monthPickerOpen, setMonthPickerOpen] = useState(false);
  const { exchangeDate, setExchangeDate } = useConverter();

  return (
    <>
      <Box
        marginTop={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="text.secondary" textAlign="center">
          {`According to the average NBP exchange rate from ${formatISO(
            exchangeDate,
            {
              representation: 'date',
            },
          )}`}
        </Typography>
      </Box>
      <Box marginTop={1} display="flex" justifyContent="center">
        <Button
          variant="text"
          onClick={() => setExchangeDate(getLastWorkingDay(new Date()))}
        >
          Check most recent exchange rate
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setMonthPickerOpen(true);
          }}
        >
          Check exchange rate for past months
        </Button>
        <Dialog
          open={monthPickerOpen}
          onClose={() => setMonthPickerOpen(false)}
        >
          <MonthPicker
            date={null}
            minDate={startOfYear(new Date())}
            maxDate={subSeconds(startOfMonth(new Date()), 1)}
            onChange={(date) => {
              setMonthPickerOpen(false);
              if (date) {
                setExchangeDate(getLastWorkingDay(endOfMonth(date)));
              }
            }}
          />
        </Dialog>
      </Box>
    </>
  );
};

export default ExchangeDate;
