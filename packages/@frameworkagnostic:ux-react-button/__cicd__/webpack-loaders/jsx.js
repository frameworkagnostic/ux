
const path = require('path');

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: [
      /node_modules/,
    ],
    include: [path.resolve(__dirname, '../../')],
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          compact: true,
        }
      },
    ]
  },
];
