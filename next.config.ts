import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.prod.website'], // For images served from the external CDN
  },
  async headers() {
    return [
      {
        source: '/:all*(.jpg|.jpeg|.png|.gif|.mp4)', // For handling video and image types
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
