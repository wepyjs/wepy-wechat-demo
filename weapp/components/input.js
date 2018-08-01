'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_wepy2.default.component({

    data: {
        test: '123',
        focusFlag: false,
        readyToSend: ''
    },

    watch: {
        readyToSend: function readyToSend(newv, oldv) {
            console.log('Input value changed, new value is: "' + newv + '", old value is: "' + oldv + '"');
        }
    },
    methods: {
        send: function send(evt) {
            if (this.readyToSend) {
                var board = this.$parent.$children[0];
                board.sendMessage(this.readyToSend);
                this.readyToSend = '';
            }
        },
        focus: function focus(evt) {
            this.focusFlag = true;
            //this.$invoke('../chartboard', 'fixPosition', this.focusFlag);
        },
        blur: function blur(evt) {
            this.focusFlag = false;
            //this.$invoke('../chartboard', 'fixPosition', this.focusFlag);
        },
        clear: function clear() {
            this.readyToSend = '';
        }
    },

    created: function created() {}
}, {info: {"components":{},"on":{},"model":{"type":"input","expr":"readyToSend"}}, handlers: [{tap: function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.send($event)
      })();
    
  }},{focus: function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.focus($event)
      })();
    
  },blur: function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.blur($event)
      })();
    
  },type: function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.input($event)
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