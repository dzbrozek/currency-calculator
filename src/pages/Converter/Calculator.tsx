import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import useConverter from 'hooks/useConverter';
import * as yup from 'yup';

const schema = yup.object().shape({
  from: yup.string().required('Select currency from which you convert'),
  to: yup.string().required('Select currency to which you convert'),
  amount: yup.number().required('Enter amount'),
});

const Calculator = () => {
  const {
    convertAmount,
    convertFrom,
    convertTo,
    convert,
    isLoading,
    exchangeRates,
  } = useConverter();
  const initialValues = {
    from: convertFrom || '',
    to: convertTo || '',
    amount: convertAmount || '',
  };
  const onSubmit = async (values: typeof initialValues) => {
    convert(
      values.from as string,
      values.to as string,
      values.amount as number,
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {({
        handleChange,
        handleBlur,
        errors,
        values,
        touched,
        submitForm,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
      }) => (
        <>
          <Grid container>
            <Grid item xs={5}>
              <FormControl fullWidth error={!!(touched.from && errors.from)}>
                <InputLabel id="from-label">From</InputLabel>
                <Select
                  labelId="from-label"
                  id="from"
                  onChange={(e) => setFieldValue('from', e.target.value)}
                  onBlur={() => setFieldTouched('from')}
                  value={values.from}
                >
                  {Object.values(exchangeRates || []).map((rate) => (
                    <MenuItem value={rate.code} key={rate.code}>
                      {rate.currency}
                    </MenuItem>
                  ))}
                </Select>
                {touched.from && errors.from ? (
                  <FormHelperText>{errors.from}</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={56}
              >
                <ArrowForwardIcon />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <FormControl fullWidth error={!!(touched.to && errors.to)}>
                <InputLabel id="to-label">To</InputLabel>
                <Select
                  labelId="to-label"
                  id="to"
                  onChange={(e) => setFieldValue('to', e.target.value)}
                  onBlur={() => setFieldTouched('to')}
                  value={values.to}
                >
                  {Object.values(exchangeRates || []).map((rate) => (
                    <MenuItem value={rate.code} key={rate.code}>
                      {rate.currency}
                    </MenuItem>
                  ))}
                </Select>
                {touched.to && errors.to ? (
                  <FormHelperText>{errors.to}</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
          </Grid>
          <Box marginTop={4}>
            <TextField
              label="Amount to be Converted"
              id="amount"
              type="number"
              fullWidth
              onBlur={handleBlur('amount')}
              value={values.amount}
              onChange={handleChange('amount')}
              error={!!(touched.amount && errors.amount)}
              helperText={
                touched.amount && errors.amount ? errors.amount : errors.amount
              }
            />
          </Box>
          <Box marginTop={4}>
            <Button
              variant="contained"
              className="button"
              fullWidth={true}
              onClick={submitForm}
              disabled={isSubmitting || isLoading}
            >
              Convert
            </Button>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default Calculator;
