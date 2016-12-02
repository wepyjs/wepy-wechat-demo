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