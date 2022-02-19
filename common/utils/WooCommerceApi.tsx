import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// initializing WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: process.env.NEXT_APP_BASE_URL!,
  consumerKey: process.env.WOOCOMMERCE_KEY_OSEBRO_ADMIN!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET_OSEBRO_ADMIN!,
  version: 'wc/v3',
});

// fetching all products //
export async function fetchWooCommerceProducts() {
  const params = '?per_page=100&pages=200';
  try {
    const response = await api.get('products' + params);
    return response;
  } catch (error) {
    throw new Error();
  }
}
