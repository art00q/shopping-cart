import styled from 'styled-components';

const MoveButtonStyled = styled.button`
  position: relative;
  margin: 0 5px;
  background-color: transparent;
  border: none;
`;

const ButtonCounter = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  background-color: #ffa542;
  color: #ffffff;
  border-radius: 50%;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
`;

export { MoveButtonStyled, ButtonCounter };
