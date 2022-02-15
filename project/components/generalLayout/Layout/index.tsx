import { Content, PageContainer } from './styles';
import { PageWrapper } from '../../helpers/PageWrapper';
import Navbar from '../Navbar';
import Footer from '../Footer/index';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <PageWrapper>
      <Navbar />
      <Content>
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </PageWrapper>
  );
}
