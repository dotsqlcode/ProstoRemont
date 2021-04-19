const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');
const path = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');
module.exports = 
withCSS(
  withLess({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      },
      webpack: (config, {isServer}) => {
        config.module.rules.push({
          test: /\.(svg|eot|woff2?|ttf)$/i,
          use: {
            loader: "file-loader",
            options: {
              name: "[path][name].[hash].[ext]",
              publicPath: "/_next/static",
              outputPath: "static",
              emitFile: !isServer,
            },
          },
        });
        config.module.rules.push({
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: "file-loader",
            options: {
              name: "[path][name].[hash].[ext]",
              publicPath: "/_next/static",
              outputPath: "static",
              emitFile: !isServer,
              esModule: false,
            },
          },
        });
        return config;
      }
  })
);

