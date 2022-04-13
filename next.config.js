/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
