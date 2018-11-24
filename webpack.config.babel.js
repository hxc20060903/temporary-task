import path from 'path';
import HTMLPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import {
  HotModuleReplacementPlugin,
} from 'webpack';

const ROOT_PATH = __dirname;
const SRC_APP_PATH = path.join(ROOT_PATH, 'src');
const CHUNK_NAME = 'task';

export default function createWebpackConfig(env, argv = {}) {
  const isProduction = argv.mode === 'production';
  return {
    entry: ['@babel/polyfill', path.join(SRC_APP_PATH, 'index.js')],
    // original development mode won't has source map and use eval directly
    devtool: isProduction ? false : 'eval-source-map',
    output: {
      path: path.join(ROOT_PATH, 'build', 'app'),
      publicPath: '/',
      filename: `${CHUNK_NAME}.[hash].js`,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new HTMLPlugin({
        title: 'Task',
        template: path.join(SRC_APP_PATH, 'index.html'),
      }),
      ...!isProduction ? [
        new HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
        }),
        new CircularDependencyPlugin({
          exclude: /node_modules/,
          failOnError: true,
          cwd: process.cwd(),
        }),
      ] : [],
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
  };
}
