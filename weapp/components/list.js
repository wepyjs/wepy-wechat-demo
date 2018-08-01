'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_wepy2.default.component({

    props: {
        list: {}
    },
    data: {},

    methods: {
        click: function click(index, item, evt) {
            console.log('index: ' + index + 'clicked: ' + item.title);
            if (this.list[index].action) {
                this.list[index].action.call(this.$parent);
            } else {
                //this.$root.showToast(item.title);
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
}, {info: {"components":{},"on":{}}, handlers: [{tap: function proxyHandlerWithEvent (index, item, $event) {
    var _vm=this;
      return (function () {
        _vm.click(index, item, $event)
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