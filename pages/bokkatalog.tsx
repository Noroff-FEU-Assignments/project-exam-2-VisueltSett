import { Product } from '../common/utils/wooCommerceTypes';
import ProductCard from '../project/components/generalLayout/ProductCard';
import Head from '../project/components/Head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { fetchWooCommerceProducts } from '../common/utils/WooCommerceApi';
import { PageWrapper } from '../project/components/helpers/PageWrapper';

interface BokkatalogProps {
  products: Product[];
}

export default function Bokkatalog(props: BokkatalogProps) {
  const { products } = props;

  console.log('--WooCommerce Products: ', products);

  return (
    <>
      <Head title="Bokkatalog - Alle bøker" />
      <PageWrapper>
        <h1>Bokkatalog - Alle våre bøker</h1>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </PageWrapper>
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
