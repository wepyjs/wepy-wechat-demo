'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_wepy2.default.component({

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
}, {info: {"components":{},"on":{}}, handlers: [{tap: function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.click(_vm.item, $event)
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