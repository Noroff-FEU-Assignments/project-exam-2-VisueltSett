import styled from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => theme.typography};
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.primary1};
  color: ${({ theme }) => theme.colors.secondary.secondary2};
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  padding: 20px;
  width: 70vw;
  margin: 0 auto;
`;
