"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = _interopRequireDefault(require('../common/api.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  /*
          components: {
              album: List,
              emoji: List,
              setting: List,
          },
  */
  data: {
    userInfo: {
      nickName: 'Gcaufy',
      id: 'gcaufy',
      avatarUrl: _core["default"].env === 'web' ? './images/myheader.png' : '../images/myheader.png'
    },
    dAlbum: [{
      icon: _core["default"].env === 'web' ? './images/album.png' : '../images/album.png',
      title: '相册'
    }, {
      icon: _core["default"].env === 'web' ? './images/collect.png' : '../images/collect.png',
      title: '收藏'
    }, {
      icon: _core["default"].env === 'web' ? './images/wallet.png' : '../images/wallet.png',
      title: '钱包'
    }, {
      icon: _core["default"].env === 'web' ? './images/card.png' : '../images/card.png',
      title: '卡包'
    }],
    dSetting: [{
      id: 'clear',
      icon: '../images/setting.png',
      title: '清除本地聊天记录',
      action: function action() {
        this.clearHistory();
      }
    }],
    dEmoji: [{
      icon: _core["default"].env === 'web' ? './images/emoji.png' : '../images/emoji.png',
      title: '表情'
    }]
  },
  methods: {
    test: function test() {
      this.dSetting[0].id = Math.random();
      this.dSetting = this.dSetting;
    },
    setUserInfo: function setUserInfo() {
      var _this = this;

      var res;

      _api["default"].getUserInfo().then(function (res) {
        ['nickName', 'avatarUrl'].forEach(function (v) {
          return _this.userInfo[v] = res[v];
        });
      });
    },
    clearHistory: function clearHistory(id) {
      var _this2 = this;

      _api["default"].clearMsg(id).then(function () {
        _this2.$root.$navigate('index');
      });
    }
  },
  created: function created() {
    this.setUserInfo();
  }
}, {info: {"components":{"list":{"path":"list"}},"on":{}}, handlers: {'12-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.test($event);
      })();
    
  }}}, models: {} });