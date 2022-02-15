import { HeaderContainer } from '../../helpers/HeaderContainer';
import { IconContainer } from '../../helpers/IconContainer';
import { TitleContainer } from './styles';

import { Menu, ChevronLeft } from '@styled-icons/material-outlined';

type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
      <TitleContainer>Osebro Antikvariat - Admin</TitleContainer>
    </HeaderContainer>
  );
}
