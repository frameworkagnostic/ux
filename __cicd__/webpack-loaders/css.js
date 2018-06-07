
const path = require('path');
const R = require('ramda');
const inspect = require('../inspect');

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      }),
      require('css-mqpacker')({
        sort: require('sort-css-media-queries').desktopFirst
      }),
      require('postcss-discard-duplicates')(),
      require('postcss-combine-duplicated-selectors')(),
      require('postcss-convert-values')(),
      require('postcss-discard-comments')()
    ]
  }
};

const oneOf = {
  test: /\.css$/,
  exclude: [
    /node_modules/,
  ],
  include: [path.resolve(__dirname, '../../')],
  oneOf: [
    {
      resourceQuery: /^\?useableInjectLoader$/,
      use: [
        {
          loader: 'style-loader/useable',
        },
        {
          loader: 'css-loader',
        },
        postCssLoader,
      ]
    },
    {
      resourceQuery: /^\?useableCssModuleLoader/,
      use: [
        {
          loader: 'style-loader/useable',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }
        },
        postCssLoader,
      ]
    },
    {
      resourceQuery: /^\?injectLoader/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        postCssLoader,
      ]
    },
    {
      resourceQuery: /^\?stylesheet/,
      use: [
        {
          loader: 'style-loader/url',
        },
        {
          loader: 'file-loader',
        },
        postCssLoader,
      ]
    },
    {
      resourceQuery: /^\?text/,
      use: [
        {
          loader: 'to-string-loader',
        },
        {
          loader: 'css-loader',
        },
        postCssLoader,
      ]
    },
    {
      resourceQuery: /^\?modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }
        },
        postCssLoader,
      ]
    },
    {
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }
        },
        postCssLoader,
      ]
    }
  ]
};

module.exports = oneOf;
