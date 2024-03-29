import { useState } from 'react';
import cart from '../../storage/cart';
import CartItem from '../CartItem/CartItem';
import { CartListStyled } from './cart-list-styled';

function CartList({ setTotalPrice }) {
  const [cartList, setCartList] = useState(cart);

  const cartItems = cartList.map((item) => (
    <CartItem setTotalPrice={setTotalPrice} setCartList={setCartList} options={item} />
  ));

  return <CartListStyled>{...cartItems}</CartListStyled>;
}

export default CartList;
