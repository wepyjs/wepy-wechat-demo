"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = _interopRequireDefault(require('../common/api.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    list: []
  },
  methods: {
    select: function select(id, evt) {
      this.$root.$navigate({
        url: 'chat?itemid=' + id
      });
    }
  },
  created: function created() {
    var _this = this;

    _api["default"].getMessageList().then(function (list) {
      _this.list = list;
    });
  }
  /*
  async function loadMessage () {
      this.list = await api.getMessageList();
      this.$apply();
  }*/

}, {info: {"components":{},"on":{}}, handlers: {'9-0': {"tap": function proxy (item) {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.select(item.id, $event);
      })();
    
  }}}, models: {} });