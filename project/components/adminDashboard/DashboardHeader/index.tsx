import { HeaderContainer } from '../../helpers/HeaderContainer';
import { IconContainer } from '../../helpers/IconContainer';
import { TitleContainer } from './styles';

import { Menu, ChevronLeft } from '@styled-icons/material-outlined';

type DashboardHeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function DashboardHeader({
  isOpened,
  toggleDrawer,
}: DashboardHeaderProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
      <TitleContainer>Osebro Antikvariat - Admin</TitleContainer>
    </HeaderContainer>
  );
}
