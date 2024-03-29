import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {
  FooterContent,
  FooterGroup,
  FooterLanguage,
  FooterLink,
  FooterSocial,
  FooterSocials,
  FooterStyled,
  LanguageItem
} from './footer-styled';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <FooterStyled>
      <FooterContent>
        <FooterGroup>
          <Logo />
        </FooterGroup>
        <FooterGroup>
          <Link to="/">
            <FooterLink>Избранное</FooterLink>
          </Link>
          <Link to="/cart">
            <FooterLink>Корзина</FooterLink>
          </Link>
          <Link to="/">
            <FooterLink>Контакты</FooterLink>
          </Link>
        </FooterGroup>
        <FooterGroup>
          <Link to="/">
            <FooterLink>Условия сервиса</FooterLink>
          </Link>
          <FooterLanguage>
            <FontAwesomeIcon icon={faGlobe} />
            <LanguageItem>Рус</LanguageItem>
            <LanguageItem>Eng</LanguageItem>
          </FooterLanguage>
        </FooterGroup>
        <FooterGroup>
          <FooterSocials>
            <Link to="/">
              <FooterSocial src="/src/assets/icons/VK.svg" alt="" />
            </Link>
            <Link to="/">
              <FooterSocial src="/src/assets/icons/Telegram.svg" alt="" />
            </Link>
            <Link to="/">
              <FooterSocial src="/src/assets/icons/Whatsapp.svg" alt="" />
            </Link>
          </FooterSocials>
        </FooterGroup>
      </FooterContent>
    </FooterStyled>
  );
}

export default Footer;
