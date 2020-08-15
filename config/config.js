import LodashWebpackPlugin from 'lodash-webpack-plugin';

import Constant from './constant';
import Theme from './theme';

const chainWebpack = config => {
  config.plugin('lodash').use(LodashWebpackPlugin, [
    {
      collections: true,
      paths: true,
    },
  ]);
};

// https://umijs.org/plugin/umi-plugin-react.html
const plugins = [
  [
    'umi-plugin-react',
    {
      dva: {
        immer: true,
        dynamicImport: true,
        hmr: true,
      },
      antd: true,
      routes: {
        exclude: [],
        // update: () => {},
      },
      locale: {
        // default: 'zh-CN',
        baseNavigator: true,
        antd: true,
        baseSeparator: '-',
      },
      library: 'react',
      dynamicImport: {
        // webpackChunkName: true,
        loadingComponent: './components/PageLoading',
        // level: ,
      },
      // dll: {
      //   include: [],
      //   exclude: [],
      // },
      // pwa: {
      //   manifestOptions: {
      //     srcPath: 'src/manifest.json',
      //   },
      //   workboxPluginMode: 'GenerateSW', // 'InjectManifest'
      //   workboxOptions: {
      //     swSrc: 'src/manifest.json',
      //     swDest: 'service-worker.js',
      //     importWorkboxFrom: 'local',
      //   }
      // },
      hd: true,
      fastClick: false,
      title: {
        defaultTitle: 'ANTD MOBILE',
        // format: '{parent}{separator}{current}',
        // separator: ' - ',
        useLocale: true,
      },
      // chunks: ['umi'],
      // scripts: [{}, ''],
      // headScripts: [{}, ''],
      // metas: [{}],
      // links: [{}],
    },
  ],
];

const define = {
  'process.env.NODE_ENV': process.env.NODE_ENV,
  ...Constant,
};

// https://umijs.org/config/
export default {
  plugins,
  // routes: [],
  // disableRedirectHoist: false,
  history: 'browser', // browser、hash、memory
  outputPath: './dist',
  // base: '/',
  // publicPath: '/',
  runtimePublicPath: false,
  // cssPublicPath: '/',
  mountElementId: 'root',
  minimizer: 'terserjs', // uglifyjs, terserjs
  hash: true,
  targets: { android: 4, ios: 6 },
  // context: {},
  // exportStatic: { htmlSuffix: false, dynamicRoot: false },
  // singular: false,
  // mock: {
  //   exclude: [],
  // },
  // block: {
  //   defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  //   npmClient: 'cnpm',
  // },
  ssr: false,

  chainWebpack,
  theme: Theme,
  treeShaking: true,
  define,
  // externals: {},
  // alias: {},
  // devServer: {},
  // devtool: {},
  // disableCSSModules: false,
  // disableCSSSourceMap: false,
  // extraBabelPresets: [],
  extraBabelPlugins: ['lodash'],
  // extraBabelIncludes: [],
  // extraPostCSSPlugins: [],
  // cssModulesExcludes: [],
  // generateCssModulesTypings: true,
  // copy: [],
  // proxy: {},
  // sass: {},
  // manifest: {
  //   basePath: '/',
  // },
  ignoreMomentLocale: true,
  // lessLoaderOptions: {},
  // cssLoaderOptions: {},
  // autoprefixer: { browsers: DEFAULT_BROWSERS, flexbox: true },
  // uglifyJSOptions: {},
};
