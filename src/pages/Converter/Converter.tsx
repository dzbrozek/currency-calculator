import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import useConverter from 'hooks/useConverter';
import ExchangeDate from 'pages/Converter/ExchangeDate';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Calculator from './Calculator';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Results from './Results';

const Converter = () => {
  const { error } = useConverter();

  return (
    <Box marginTop={6}>
      <Paper
        variant="outlined"
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <Typography variant="h5">Currency Converter</Typography>

        <Box marginTop={2}>
          {error ? (
            <Box
              sx={{ display: 'flex', justifyContent: 'center' }}
              marginTop={4}
              marginBottom={4}
            >
              <Alert severity="error" sx={{ width: '100%' }}>
                {error}
              </Alert>
            </Box>
          ) : (
            <>
              <Calculator />

              <Results />

              <ExchangeDate />
            </>
          )}
        </Box>

        <Box marginTop={4} display="flex" justifyContent="center">
          <Link
            to="about"
            component={RouterLink}
            variant="subtitle1"
            underline="none"
            color="secondary"
          >
            Learn more about converter
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Converter;
