import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  ActionButton,
  Actions,
  CartItemStyled,
  Description,
  ImageGroup,
  ItemImage,
  ItemName,
  ItemPrice,
  ItemRemove,
  ItemWrapper,
  ItemsAmount,
  TotalPrice
} from './cart-item-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import cart, { getTotalPrice } from '../../storage/cart';
import storage from '../../storage/storage';

function CartItem({ options, setCartList, setTotalPrice }) {
  const { img, title, price } = options;
  const [amount, setAmount] = useState(options.amount);
  const totalPrice = amount * price;

  useEffect(() => {
    options.amount = amount;
    setTotalPrice(getTotalPrice());
    storage.addToStorage('cart', cart);
  }, [amount]);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const removeItem = () => {
    const itemIndex = cart.findIndex((item) => item.id === options.id);

    const cartCopy = cart.slice(0, itemIndex).concat(cart.slice(itemIndex + 1, cart.length));

    cart.length = 0;
    cart.push(...cartCopy);

    setCartList(cartCopy);
    setTotalPrice(getTotalPrice());
    storage.addToStorage('cart', cartCopy);
  };

  return (
    <CartItemStyled>
      <ItemWrapper>
        <ImageGroup>
          <ItemImage src={img} alt="" />
          <Actions>
            <ActionButton onClick={decreaseAmount}>-</ActionButton>
            <ItemsAmount>{amount}</ItemsAmount>
            <ActionButton onClick={increaseAmount}>+</ActionButton>
          </Actions>
        </ImageGroup>
        <Description>
          <ItemName>{title}</ItemName>
          <ItemPrice>{price} ₽</ItemPrice>
        </Description>
        <div>
          <ItemRemove onClick={removeItem}>
            <FontAwesomeIcon icon={faTrash} size="xl" style={{ color: '#ff0000' }} />
          </ItemRemove>
          <TotalPrice>{totalPrice} ₽</TotalPrice>
        </div>
      </ItemWrapper>
    </CartItemStyled>
  );
}

export default CartItem;
