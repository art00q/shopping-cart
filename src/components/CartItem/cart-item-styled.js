import styled from 'styled-components';

const Font = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const CartItemStyled = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  box-sizing: border-box;
  box-shadow: 0 0 6px #999999;
  background-color: #ffffff;
  border-radius: 30px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;

const ItemImage = styled.img`
  max-height: 140px;
  object-fit: cover;
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 130px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-left: 15px;
`;

const ItemName = styled(Font)`
  color: #000000;
  font-weight: 400;
  font-size: 17px;
`;

const ItemPrice = styled(Font)`
  color: #aaaaaa;
  font-size: 15px;
`;

const ItemRemove = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const TotalPrice = styled(Font)`
  position: absolute;
  bottom: 15px;
  right: 20px;
  white-space: nowrap;
  font-size: 15px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #ffce7f;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #ffce7f;
  }
`;

const ItemsAmount = styled(Font)`
  margin: 0 25px;
  color: #000000;
  font-size: 17px;
`;

export {
  CartItemStyled,
  ItemImage,
  ImageGroup,
  ItemName,
  ItemPrice,
  ItemRemove,
  ItemWrapper,
  TotalPrice,
  ActionButton,
  ItemsAmount,
  Actions,
  Description
};
