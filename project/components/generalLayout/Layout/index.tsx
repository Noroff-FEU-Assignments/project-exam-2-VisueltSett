import { Container, Content, PageContainer } from './styles';
import Navbar from '../Navbar';
import Sidebar from '../../adminDashboard/Sidebar/index';
import Footer from '../Footer/index';
import { useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <Sidebar isOpened={isOpened} />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  );
}
