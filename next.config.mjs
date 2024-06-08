import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// Create the Vanilla Extract plugin instance
const withVanillaExtract = createVanillaExtractPlugin();

// Export the combined configuration using ES6 syntax
export default withVanillaExtract(nextConfig);