import { PaymentButton, TotalAmount, TotalPaymentStyled } from './total-payment-styled';

function TotalPayment({ totalPrice }) {
  return (
    <TotalPaymentStyled>
      <TotalAmount>
        <p>ИТОГО</p>
        <p>₽ {totalPrice}</p>
      </TotalAmount>
      <PaymentButton>Перейти к оформлению</PaymentButton>
    </TotalPaymentStyled>
  );
}

export default TotalPayment;
