import Logo from '../Logo/Logo';
import MoveButtons from '../MoveButtons/MoveButtons';
import { HeaderStyled } from './header-styled';

function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <MoveButtons />
    </HeaderStyled>
  );
}

export default Header;
