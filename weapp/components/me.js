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
            avatarUrl: _wepy2.default.env === 'web' ? './images/myheader.png' : '../images/myheader.png'
        },
        dAlbum: [{ icon: _wepy2.default.env === 'web' ? './images/album.png' : '../images/album.png', title: '相册' }, { icon: _wepy2.default.env === 'web' ? './images/collect.png' : '../images/collect.png', title: '收藏' }, { icon: _wepy2.default.env === 'web' ? './images/wallet.png' : '../images/wallet.png', title: '钱包' }, { icon: _wepy2.default.env === 'web' ? './images/card.png' : '../images/card.png', title: '卡包' }],
        dSetting: [{
            id: 'clear',
            icon: '../images/setting.png',
            title: '清除本地聊天记录',
            action: function action() {
                this.clearHistory();
            }
        }],
        dEmoji: [{ icon: _wepy2.default.env === 'web' ? './images/emoji.png' : '../images/emoji.png', title: '表情' }]
    },

    methods: {
        test: function test() {
            debugger;
            this.dSetting[0].id = Math.random();
            this.dSetting = this.dSetting;
        },
        setUserInfo: function setUserInfo() {
            var _this = this;

            var res = void 0;
            _api2.default.getUserInfo().then(function (res) {
                ['nickName', 'avatarUrl'].forEach(function (v) {
                    return _this.userInfo[v] = res[v];
                });
            });
        },
        clearHistory: function clearHistory(id) {
            var _this2 = this;

            _api2.default.clearMsg(id).then(function () {
                _this2.$root.$navigate('index');
            });
        }
    },
    created: function created() {
        this.setUserInfo();
    }
}, {info: {"components":{"list":{"path":"./list"}},"on":{}}, handlers: [{tap: function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.test($event)
      })();
    
  }}] });