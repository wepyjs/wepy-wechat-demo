'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('../common/api.js')

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//

_wepy2.default.component({
    data: {
        list: []
    },

    methods: {
        select: function select(id, evt) {
            this.$root.$navigate({ url: 'chat?itemid=' + id });
        }
    },
    created: function created() {
        var _this = this;

        _api2.default.getMessageList().then(function (list) {
            _this.list = list;
        });
    }
    /*
    async function loadMessage () {
        this.list = await api.getMessageList();
        this.$apply();
    }*/
}, {info: {"components":{},"on":{}}, handlers: [{tap: function proxyHandlerWithEvent (item, $event) {
    var _vm=this;
      return (function () {
        _vm.select(item.id, $event)
      })();
    
  }}] });