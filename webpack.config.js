const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  outputDir: path.join(__dirname, 'build/'),
};

module.exports = {
  entry: './src/Index.bs.js',
  mode: 'development',
  output: {
    path: paths.outputDir,
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
    }),
  ],
  devServer: { compress: true, port: 8080, contentBase: paths.outputDir, historyApiFallback: true },
};
