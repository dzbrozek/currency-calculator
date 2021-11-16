import NoMatch from 'pages/NoMatch';
import { Routes, Route } from 'react-router-dom';
import About from 'pages/About';
import Calculator from 'pages/Calculator';

const Routing = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Calculator />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Routing;
