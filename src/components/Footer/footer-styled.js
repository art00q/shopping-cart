import styled from 'styled-components';

const FooterStyled = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 15px;
  box-shadow: 0 0 6px #999999;
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

const FooterGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterLink = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 17px;
  &:hover {
    color: #838383;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const FooterSocial = styled.img`
  cursor: pointer;
`;

const FooterLanguage = styled.div`
  display: flex;
`;

const LanguageItem = styled.button`
  margin-left: 5px;
  background-color: transparent;
  border: none;
  color: #101010;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 15px;
  &:hover {
    color: #ffa542;
  }
`;

export {
  FooterStyled,
  FooterContent,
  FooterGroup,
  FooterLink,
  FooterSocial,
  FooterSocials,
  FooterLanguage,
  LanguageItem
};
