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
