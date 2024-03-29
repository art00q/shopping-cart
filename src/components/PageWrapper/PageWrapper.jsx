import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Page, Wrapper } from './page-wrapper-styled';

function PageWrapper({ children }) {
  return (
    <Page>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </Page>
  );
}

export default PageWrapper;
