import { useEffect, useState } from 'react';
import cart, { getTotalPrice } from '../../storage/cart';
import CartList from '../CartList/CartList';
import PageWrapper from '../PageWrapper/PageWrapper';
import TotalPayment from '../TotalPayment/TotalPayment';
import { CartStyled } from './cart-styled';

function Cart() {
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());

  return (
    <PageWrapper>
      <CartStyled>
        <CartList setTotalPrice={setTotalPrice} />
        <TotalPayment totalPrice={totalPrice} />
      </CartStyled>
    </PageWrapper>
  );
}

export default Cart;
