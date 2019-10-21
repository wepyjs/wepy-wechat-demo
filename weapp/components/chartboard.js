"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = _interopRequireDefault(require('../common/api.js'));

var _global = _interopRequireDefault(require('../common/global.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: ['itemid'],
  data: {
    message: [],
    focus: false
  },
  watch: {
    itemid: function itemid(newval, oldval) {
      console.log('Load message from id "' + newval + '"');
      this.loadMessage(newval);
    }
  },
  attached: function attached() {},
  created: function created() {},
  methods: {
    loadMessage: function loadMessage(id) {
      var _this = this;

      var userinfo, message;

      _api["default"].getUserInfo().then(function (userinfo) {
        _this.current = userinfo;

        _api["default"].getHistory(id).then(function (message) {
          _this.message = message;
          _this.to = id;

          _this.message.forEach(function (msg) {
            if (msg.from === 'me') {
              msg.name = userinfo.nickName;
              msg.icon = userinfo.avatarUrl;
            }
          });
        });
      });
    },
    sendMessage: function sendMessage(msg) {
      var _this2 = this;

      var id = this.to;

      _api["default"].sendMsg(id, msg).then(function (msgObj) {
        msgObj.name = _this2.current.nickName;
        msgObj.icon = _this2.current.avatarUrl;

        _this2.message.push(msgObj);

        _api["default"].getRandomReply(id).then(function (reply) {
          _this2.replyMessage(reply);
        });
      });
    },
    replyMessage: function replyMessage(msg) {
      var _this3 = this;

      var id = this.to;

      var contact = _global["default"].getContact(id);

      _api["default"].replyMsg(id, msg).then(function (msgObj) {
        msgObj.name = contact.name;
        msgObj.icon = contact.icon;

        _this3.message.push(msgObj);
      });
    }
  },
  fixPosition: function fixPosition(focus) {
    this.focus = focus;
    this.$apply();
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });