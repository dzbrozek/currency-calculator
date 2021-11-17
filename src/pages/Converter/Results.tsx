import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useConverter from 'hooks/useConverter';

const Results = () => {
  const { convertRate, convertAmount, convertFrom, convertTo } = useConverter();

  if (
    convertRate === null ||
    !convertFrom ||
    !convertTo ||
    convertAmount === null
  ) {
    return null;
  }

  return (
    <>
      <Box marginTop={4} display="flex" justifyContent="center">
        <Typography variant="h6">{convertAmount}</Typography>
        <Typography
          variant="body2"
          gutterBottom
          marginLeft={1}
          alignSelf="flex-end"
        >
          {convertFrom}
        </Typography>
        <Typography
          marginLeft={2}
          marginRight={2}
          alignSelf="center"
          variant="h5"
        >
          =
        </Typography>
        <Typography variant="h6">
          {(convertAmount * convertRate).toFixed(2)}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          marginLeft={1}
          alignSelf="flex-end"
        >
          {convertTo}
        </Typography>
      </Box>
    </>
  );
};

export default Results;
