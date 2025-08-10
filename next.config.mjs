// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // forces static export for GitHub Pages
  images: {
    unoptimized: true, // prevents image optimization errors during static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/my_portfolio' : '', // repo name in production only
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my_portfolio/' : '',
};

export default nextConfig;
