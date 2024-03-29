import styled from 'styled-components';

const TotalPaymentStyled = styled.div`
  width: 30%;
  max-height: 120px;
  box-shadow: 0 0 6px #999999;
  background-color: #ffffff;
  border-radius: 30px;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 25px 0;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #ffa542;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  padding-bottom: 15px;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 15px;
`;

export { TotalAmount, TotalPaymentStyled, PaymentButton };
