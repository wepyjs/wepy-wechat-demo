
let prod = process.env.NODE_ENV === 'production';

module.exports = {
  "wpyExt": ".wpy",
  "sass": {
    "outputStyle": "compressed"
  },
  "less": {
    "compress": true
  },
  "babel": {
    "presets": [
      "es2015",
      "stage-1"
    ],
    "plugins": [
      "transform-export-extensions",
      "syntax-export-extensions",
      "transform-runtime"
    ]
  }
};


if (prod) {
  // 压缩sass
  module.exports['sass'] = {"outputStyle": "compressed"};
  
  // 压缩less
  module.exports['less'] = {"compress": true};

  // 压缩js
  module.exports.plugins = {
      'UglifyJsPlugin': {
          filter: /\.js$/,
          config: {
              compress: {
                  warnings: false
              }
          }
      }
  };
}