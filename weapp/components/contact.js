"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = _interopRequireDefault(require('../common/api.js'));

var _global = _interopRequireDefault(require('../common/global.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import Alpha from './alpha';
_core["default"].component({
  data: {
    toplist: [{
      header: _core["default"].env === 'web' ? './images/new_friend.png' : '../images/new_friend.png',
      name: '新的朋友'
    }, {
      header: _core["default"].env === 'web' ? './images/group_chat.png' : '../images/group_chat.png',
      name: '群聊'
    }, {
      header: _core["default"].env === 'web' ? './images/tag.png' : '../images/tag.png',
      name: '标签'
    }, {
      header: _core["default"].env === 'web' ? './images/public.png' : '../images/public.png',
      name: '公众号'
    }],
    contacts: {},
    total: 0
  },
  methods: {
    select: function select(id, evt) {
      this.$root.$navigate({
        url: 'chat?id=' + id
      });
    },
    loadContact: function loadContact() {
      var _this = this;

      var contacts;
      var contactObj = {};

      _api["default"].getContact().then(function (contacts) {
        contacts.forEach(function (v) {
          contactObj[v.id] = v;
        });

        _global["default"].setContact(contactObj);

        _this.total = contacts.length;
        _this.contacts = _this.format(contacts);
      });
    },
    format: function format(arr) {
      var c,
          obj = {};
      arr.forEach(function (item) {
        c = item.id[0].toUpperCase();

        if (obj[c]) {
          obj[c].push(item);
        } else {
          obj[c] = [item];
        }
      });
      return obj;
    }
  },
  created: function created() {
    this.loadContact();
  }
}, {info: {"components":{"alpha":{"path":"alpha"}},"on":{}}, handlers: {'11-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.select(item.id);
      })();
    
  }}}, models: {} });