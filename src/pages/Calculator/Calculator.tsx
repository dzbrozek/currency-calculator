import { Link } from 'react-router-dom';

const Calculator = () => {
  return (
    <div>
      <p>Trust me, I'm a calculator</p>
      <Link to="about">About me</Link>
    </div>
  );
};

export default Calculator;
