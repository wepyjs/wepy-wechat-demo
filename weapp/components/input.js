"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    test: '123',
    focusFlag: false,
    readyToSend: ''
  },
  watch: {
    readyToSend: function readyToSend(newv, oldv) {
      console.log("Input value changed, new value is: \"".concat(newv, "\", old value is: \"").concat(oldv, "\""));
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
      this.focusFlag = true; //this.$invoke('../chartboard', 'fixPosition', this.focusFlag);
    },
    blur: function blur(evt) {
      this.focusFlag = false; //this.$invoke('../chartboard', 'fixPosition', this.focusFlag);
    },
    clear: function clear() {
      this.readyToSend = '';
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'14-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.send($event);
      })();
    
  }},'14-1': {"focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.focus($event);
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.blur($event);
      })();
    
  }, "type": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.input($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "readyToSend",
      handler: function set ($v) {
      var _vm=this;
        _vm.readyToSend = $v;
      
    }
    }} });