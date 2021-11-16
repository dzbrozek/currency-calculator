import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const About = () => {
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
        <Typography variant="h5" paragraph>
          About Currency Converter
        </Typography>

        <Typography variant="body2" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
          leo id sapien eleifend, eu malesuada sapien iaculis. Aenean quis
          euismod orci, nec vulputate neque. Etiam eget dolor nulla. Donec
          fermentum massa orci, eget ultricies erat malesuada eu. Pellentesque
          vitae massa maximus, placerat mi non, sodales est. Morbi id dui
          lobortis ligula tempor fermentum sit amet vel turpis. Quisque vehicula
          rutrum ante sed faucibus. Pellentesque semper enim quis nulla sagittis
          laoreet ut non mauris. Quisque dignissim efficitur porta.
        </Typography>

        <Typography variant="body2" paragraph>
          Proin id lorem velit. Morbi pharetra hendrerit mauris. Vestibulum diam
          odio, finibus eget vulputate nec, rutrum quis erat. Nam euismod
          efficitur purus, a fermentum arcu aliquam et. Maecenas gravida lacus
          vitae vulputate pharetra. Vivamus a orci volutpat, finibus diam et,
          varius quam. Vestibulum sem lectus, vulputate non lacinia congue,
          pharetra et justo. Curabitur tincidunt dolor ut diam viverra, sed
          venenatis neque accumsan. Phasellus ipsum erat, vestibulum ac ligula
          sed, sollicitudin imperdiet nibh. Ut est nibh, iaculis maximus enim
          et, varius consectetur quam. Pellentesque viverra sapien at nunc
          ornare, sed fermentum lorem porta. Praesent eget eros accumsan,
          egestas sem sed, efficitur ipsum.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
