import { Content, PageContainer } from './styles';

import DashboardHeader from '../DashboardHeader';
import Sidebar from '../Sidebar/index';
import Footer from '../Footer/index';
import { useState } from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      <DashboardHeader isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Content>
        <Sidebar isOpened={isOpened} />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </>
  );
}
