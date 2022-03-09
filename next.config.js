/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'https://www.osebroantikvariat.no',
      'https://detnorskewebselskab.no',
      'https://wp.detnorskewebselskab.no',
    ],
  },
  env: {
    NEXT_APP_BASE_URL: 'https://wp.detnorskewebselskab.no',
    WOOCOMMERCE_KEY_Ane: 'ck_53bbd3d011773c47bb456e8637948debaa7c6d20',
    WOOCOMMERCE_SECRET_Ane: 'cs_fac2cb14c057515b6f29f974e9d8246380d12deb',
    WOOCOMMERCE_KEY_OSEBRO_ADMIN: 'ck_5a953325e39a0fe4ae44e9d6f8052466ba664569',
    WOOCOMMERCE_SECRET_OSEBRO_ADMIN:
      'cs_0426ebb894655a41992b173933cbe2f0c0a51d40',
  },
};

module.exports = nextConfig;
