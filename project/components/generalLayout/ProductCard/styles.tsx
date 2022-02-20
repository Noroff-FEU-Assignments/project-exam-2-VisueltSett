import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 95vh;
  max-width: 240px;
  height: 55vh;
  min-height: 550px;
  margin: 1rem 1rem;
  padding: 2rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary.secondaryColor};
  box-shadow: ${({ theme }) => theme.colors.secondary.boxShadowColor};
  border-radius: 0.25rem;
`;

/* <Image
          src={product.images[0].src}
          alt={product.name}
          layout="fill"
          height="200"
          width="150"
        />
`;*/
