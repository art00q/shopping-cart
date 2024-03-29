import cart from '../../storage/cart';
import MoveButton from '../MoveButton/MoveButton';
import { MoveButtonsStyled } from './move-buttons-styled';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function MoveButtons() {
  const itemsAmount = cart.length;

  return (
    <MoveButtonsStyled>
      <MoveButton path="/" shape={faHeart} />
      <MoveButton path="/cart" shape={faShoppingCart} count={itemsAmount} />
    </MoveButtonsStyled>
  );
}

export default MoveButtons;
