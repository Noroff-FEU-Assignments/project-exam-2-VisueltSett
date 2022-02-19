import Image from 'next/image';
import { Card } from './styles';
import { Product } from '../../../../common/utils/wooCommerceTypes';
import DOMPurify from 'dompurify';
import NoThumbnailImg from '../../../../public/images/thumbnail-no-image_600w-800h.jpg';
import { Star } from '@styled-icons/material';

interface ProductProps {
  product: Product;
}

const ProductCard = (props: ProductProps) => {
  const { product } = props;

  return (
    <>
      <Card>
        <h2>{product.name}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(`${product.description}`),
          }}
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(`${product.short_description}`),
          }}
        ></p>
        <h5>kr {product.regular_price},- eks mva</h5>
      </Card>
    </>
  );
};

export default ProductCard;
