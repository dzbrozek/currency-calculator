import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import Routing from 'Routing';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const theme = createTheme({
  palette: {
    primary: {
      main: '#faa83b',
      light: '#ffda6c',
      dark: '#c27900',
    },
    secondary: {
      main: '#dd6526',
      light: '#ff9554',
      dark: '#a53600',
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Routing />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
