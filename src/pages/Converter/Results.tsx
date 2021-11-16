import MonthPicker from '@mui/lab/MonthPicker';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import startOfMonth from 'date-fns/startOfMonth';
import startOfYear from 'date-fns/startOfYear';
import subSeconds from 'date-fns/subSeconds';
import { useState } from 'react';

const Results = () => {
  const [monthPickerOpen, setMonthPickerOpen] = useState(false);

  return (
    <>
      <Box marginTop={4} display="flex" justifyContent="center">
        <Typography variant="h6">100</Typography>
        <Typography
          variant="body2"
          gutterBottom
          marginLeft={1}
          alignSelf="flex-end"
        >
          GBP
        </Typography>
        <Typography
          marginLeft={2}
          marginRight={2}
          alignSelf="center"
          variant="h5"
        >
          =
        </Typography>
        <Typography variant="h6">1000</Typography>
        <Typography
          variant="body2"
          gutterBottom
          marginLeft={1}
          alignSelf="flex-end"
        >
          USD
        </Typography>
      </Box>
      <Box
        marginTop={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="text.secondary" textAlign="center">
          1 GBP = 1,1852 EUR, according to the average NBP exchange rate from
          16/11/2021
        </Typography>
      </Box>
      <Box marginTop={1} display="flex" justifyContent="center">
        <Button variant="text">Check exchange rate for today</Button>
        <Button variant="text" onClick={() => setMonthPickerOpen(true)}>
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
            onChange={() => setMonthPickerOpen(false)}
          />
        </Dialog>
      </Box>
    </>
  );
};

export default Results;
