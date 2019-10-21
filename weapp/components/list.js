"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    list: {}
  },
  data: {},
  methods: {
    click: function click(index, item, evt) {
      console.log('index: ' + index + 'clicked: ' + item.title);

      if (this.list[index].action) {
        this.list[index].action.call(this.$parent);
      } else {//this.$root.showToast(item.title);
      }
    }
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      console.log(_this.list);
    }, 1000);
  },
  load: function load(list) {
    this.list = list;
    this.$apply();
  }
}, {info: {"components":{},"on":{}}, handlers: {'25-0': {"tap": function proxy (index, item) {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.click(index, item, $event)
      })();
    
  }}}, models: {} });