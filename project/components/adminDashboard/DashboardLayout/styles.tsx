import styled from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => theme.typography};
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  ${({ theme }) => theme.typography};
  padding: 20px;
  width: 70vw;
  margin: 0 auto;
`;
