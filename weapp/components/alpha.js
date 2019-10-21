"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var l = 26;
var table = ['★'];

while (l--) {
  table.push(String.fromCharCode(65 + (26 - l - 1)));
}

table.push('#');

_core["default"].component({
  data: {
    tags: table
  },
  methods: {}
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });