import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  background: rgba(42, 51, 112, 0.5);
  color: #f2f2f2;
  width: ${(props) => (props.isOpened ? '20vw' : '0vw')};
  transition: width 0.5s;
  overflow: hidden;
`;
