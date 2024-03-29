import { Link } from 'react-router-dom';
import { LogoStyled } from './logo-styled';

function Logo() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <LogoStyled>QPICK</LogoStyled>
    </Link>
  );
}

export default Logo;
