import Image from 'next/image';
import { Card, ImageContainer, Details } from './styles';
import { Product } from '../../../../common/utils/wooCommerceTypes';
import { Star } from '@styled-icons/material';

interface ProductProps {
  product: Product;
}

const ProductCard = (props: ProductProps) => {
  const { product } = props;

  return (
    <Card>
      <ImageContainer>
        <Image
          src={product.images[0].src}
          alt="Bok cover bilde"
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <Details>
        <span>{product.name}</span>

        <span>
          <h5>kr {product.regular_price}</h5>
        </span>
      </Details>
    </Card>
  );
};

export default ProductCard;
