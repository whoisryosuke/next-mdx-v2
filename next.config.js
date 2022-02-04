// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
// });
const remarkGfm = require("remark-gfm");
// import remarkGfm from "remark-gfm";
module.exports = {
  pageExtensions: ["js", "jsx", "mdx"],

  // Required for Remark GFM (ESM Module)
  experimental: { esmExternals: true },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkGfm],
          },
        },
      ],
    });

    return config;
  },
};
