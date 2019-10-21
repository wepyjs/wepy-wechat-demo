"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
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
}, {info: {"components":{},"on":{}}, handlers: {'8-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.change(0)
      })();
    
  }},'8-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.change(1)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.change(2)
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.change(3)
      })();
    
  }}}, models: {} });