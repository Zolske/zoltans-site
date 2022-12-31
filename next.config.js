/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // using SVGR https://www.codeconcisely.com/posts/using-svg-in-nextjs/#using-svgr
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },

  // https://stackoverflow.com/questions/71308459/import-svg-and-resize-svg-use-styled-components-in-next-js
  webpack(config) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });
    return config;
  },
};

module.exports = nextConfig;
