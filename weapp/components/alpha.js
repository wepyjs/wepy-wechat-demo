'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var l = 26; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var table = ['★'];

while (l--) {
    table.push(String.fromCharCode(65 + (26 - l - 1)));
}
table.push('#');

_wepy2.default.component({

    data: {
        tags: table
    },

    methods: {}

}, {info: {"components":{},"on":{}}, handlers: [] });