const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const package = require('./package.json');

// constiables
const isProduction = true;
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  context: sourcePath,
  mode: 'production',
  entry: {
    appp: './main.tsx',
  },
  output: {
    path: outPath,
    filename: '[chunkhash].js',
    chunkFilename: '[chunkhash].[contenthash].js',
    publicPath: '/greyson-bank-react/',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@components/*': path.resolve(__dirname, 'src/components/*'),
      '@intl': path.resolve(__dirname, 'src/i18n'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@pages/*': path.resolve(__dirname, 'src/pages/*'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: [
          !isProduction && {
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] },
          },
          'ts-loader',
        ].filter(Boolean),
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(a?png|svg)$/,
        use: 'url-loader?limit=10000',
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader',
        type: 'asset/resource',
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader',
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      maxSize: 244000,
      minChunks: 1,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      TYPE: 'production',
      DEBUG: false,
    }),
    new CleanWebpackPlugin(),
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
      meta: {
        title: package.name,
        description: package.description,
        keywords: Array.isArray(package.keywords)
          ? package.keywords.join(',')
          : undefined,
      },
    }),
    new CopyPlugin({
      patterns: [{ from: 'assets', to: 'assets' }],
      options: {
        concurrency: 100,
      },
    }),
  ],
  devServer: {
    hot: true,
    // host: '10.64.58.71',
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  devtool: isProduction ? false : 'source-map',
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
};
