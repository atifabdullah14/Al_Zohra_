/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  sassOptions: {
    includePaths: ["src/assets/scss"],
  },
};

module.exports = nextConfig;
