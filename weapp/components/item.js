"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    item: {},
    index: {}
  },
  methods: {
    click: function click(item, evt) {
      console.log('Group->Item|clicked: ' + item.title);
      return;

      if (this.item.action) {
        this.item.action.call(this.$parent);
      } else {
        this.$root.showToast(this.item.title);
      }
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.click(_vm.item, $event);
      })();
    
  }}}, models: {} });