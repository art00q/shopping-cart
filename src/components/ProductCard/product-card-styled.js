import styled from 'styled-components';

const CardStyled = styled.div`
  width: 31%;
  background-color: #ffffff;
  box-shadow: 0 0 6px #999999;
  border-radius: 30px;
`;

const CardImage = styled.img`
  width: 100%;
  padding: 50px 50px 30px 50px;
  box-sizing: border-box;
`;

const CardContent = styled.div`
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
`;

const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const Font = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const CardName = styled(Font)`
  color: #000000;
  font-size: 17px;
`;

const CardPrice = styled(Font)`
  color: #ffa542;
  font-size: 17px;
`;

const CardRating = styled(Font)`
  color: #838383;
  font-size: 17px;
`;

const CardButton = styled(Font)`
  color: #000000;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: #838383;
  }
`;

export {
  CardButton,
  CardContent,
  CardGroup,
  CardImage,
  CardName,
  CardPrice,
  CardRating,
  CardStyled
};
