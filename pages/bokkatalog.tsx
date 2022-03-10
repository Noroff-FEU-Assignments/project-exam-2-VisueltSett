import { Product } from '../common/utils/wooCommerceTypes';
import ProductCard from '../project/components/generalLayout/ProductCard';
import Head from '../project/components/Head';
import { GetStaticProps } from 'next';
import { fetchWooCommerceProducts } from '../common/WooCommerceApi';
import { ItemWrapper } from '../project/components/helpers/ItemWrapper';
//import NoThumbnailImg from '../public/images/thumbnail-no-image_600w-800h.jpg';

interface BokkatalogProps {
  products: Product[];
}

export default function Bokkatalog(props: BokkatalogProps) {
  const { products } = props;

  console.log('--WooCommerce Products: ', products);

  return (
    <>
      <Head title="Bokkatalog - Alle bøker" />
      <h1>Bokkatalog - Alle våre bøker</h1>
      <ItemWrapper className="bokkatalog-results-container">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ItemWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },

    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
