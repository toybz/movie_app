/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies",
        permanent: true,
      },
    ];
  },
  env: {
    MOVIE_PROVIDER_ENDPOINT: process.env.MOVIE_PROVIDER_ENDPOINT,
    MOVIE_PROVIDER_KEY: process.env.MOVIE_PROVIDER_KEY,
  },
  pwa: {
    dest: "public",
    dynamicStartUrlRedirect: "/movies",
    cacheOnFrontEndNav: true,
  },
});

module.exports = nextConfig;
