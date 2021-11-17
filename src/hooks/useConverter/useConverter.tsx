import { ConverterContext } from 'components/ConverterProvider/ConverterProvider';
import { useContext } from 'react';

const useConverter = () => {
  const context = useContext(ConverterContext);
  if (!context) {
    throw new Error(
      '"useConverter" cannot be used outside of ConverterProvider',
    );
  }
  return context;
};

export default useConverter;
