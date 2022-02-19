import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 85vh;
  max-width: 200px;
  height: 40vh;
  min-height: 340px;
  margin: 0.5rem 0.25rem 0.5rem 0.25rem;
  padding: 1rem;
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
