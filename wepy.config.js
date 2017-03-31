
let prod = process.env.NODE_ENV === 'production';

module.exports = {
    eslint: true,
    "wpyExt": ".wpy",
    "compilers": {
        "sass": {
          "outputStyle": "compressed"
        },
        babel: {
            "presets": [
                "es2015",
                "stage-1"
            ],
            "plugins": [
                "transform-export-extensions",
                "syntax-export-extensions",
            ]
        }
    }
};


if (prod) {
    // 压缩sass
    module.exports['sass'] = {"outputStyle": "compressed"};


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
