import NoMatch from 'pages/NoMatch';
import { Routes, Route, Outlet } from 'react-router-dom';
import About from 'pages/About';
import Converter from 'pages/Converter';
import Container from '@mui/material/Container';

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Container component="main" maxWidth="md">
            <Outlet />
          </Container>
        }
      >
        <Route index element={<Converter />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Routing;
