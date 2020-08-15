import Constant, { CDN_HOST, BASE_PATH } from './constant.prod';

// const chainWebpack = config => {};

const PUBLIC_PATH = `${CDN_HOST}${BASE_PATH}`;

const define = {
  'process.env.UMI_ENV': 'prod',
  ...Constant,
};

// https://umijs.org/config/
export default {
  base: BASE_PATH,
  publicPath: PUBLIC_PATH,
  cssPublicPath: PUBLIC_PATH,

  // chainWebpack,
  define,
  // extraBabelPlugins: [],
  manifest: {
    basePath: PUBLIC_PATH,
  },
  cssLoaderOptions: {
    localIdentName: '[hash:base64:8]',
  },
};
