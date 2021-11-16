import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Calculator from './Calculator';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Results from './Results';

const Converter = () => {
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
          <Calculator />

          <Results />
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
