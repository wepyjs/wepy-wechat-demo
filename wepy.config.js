const path = require('path');
let prod = process.env.NODE_ENV === 'production';

module.exports = {
  eslint: true,
  wpyExt: ".wpy",
  static: [
    'src/images',
    'src/mocks/users'
  ],
  build: {
  },
  compilers: {
    sass: {
      outputStyle: "compressed"
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
  }
};


if (prod) {

  delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {compress: true}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    /*imagemin: {
      filter: /\.(jpg|png|jpge)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }*/
  }
}

