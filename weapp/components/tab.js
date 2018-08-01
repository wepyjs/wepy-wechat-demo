'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_wepy2.default.component({

    props: {
        active: {
            twoWay: true
        }
    },
    data: {},

    methods: {
        change: function change(idx, evt) {
            this.$emit('changetab', +idx);
            this.active = +idx;
        }
    },

    onLoad: function onLoad() {}
}, {info: {"components":{},"on":{}}, handlers: [{tap: function proxyHandler () {
    var _vm=this;
      return (function () {
        _vm.change(0)
      })();
    
  }},{tap: function proxyHandler () {
    var _vm=this;
      return (function () {
        _vm.change(1)
      })();
    
  }},{tap: function proxyHandler () {
    var _vm=this;
      return (function () {
        _vm.change(2)
      })();
    
  }},{tap: function proxyHandler () {
    var _vm=this;
      return (function () {
        _vm.change(3)
      })();
    
  }}] }); //
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
//
//
//
//
//
//