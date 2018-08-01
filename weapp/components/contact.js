'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('../common/api.js')

var _api2 = _interopRequireDefault(_api);

var _global = require('../common/global.js')

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Alpha from './alpha';
_wepy2.default.component({

    data: {
        toplist: [{
            header: _wepy2.default.env === 'web' ? './images/new_friend.png' : '../images/new_friend.png',
            name: '新的朋友'
        }, {
            header: _wepy2.default.env === 'web' ? './images/group_chat.png' : '../images/group_chat.png',
            name: '群聊'
        }, {
            header: _wepy2.default.env === 'web' ? './images/tag.png' : '../images/tag.png',
            name: '标签'
        }, {
            header: _wepy2.default.env === 'web' ? './images/public.png' : '../images/public.png',
            name: '公众号'
        }],
        contacts: {},
        total: 0
    },
    methods: {
        select: function select(id, evt) {
            this.$root.$navigate({ url: 'chat?id=' + id });
        },
        loadContact: function loadContact() {
            var _this = this;

            var contacts = void 0;
            var contactObj = {};

            _api2.default.getContact().then(function (contacts) {
                contacts.forEach(function (v) {
                    contactObj[v.id] = v;
                });
                _global2.default.setContact(contactObj);

                _this.total = contacts.length;
                _this.contacts = _this.format(contacts);
            });
        },
        format: function format(arr) {
            var c = void 0,
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
}, {info: {"components":{"alpha":{"path":"./alpha"}},"on":{}}, handlers: [{tap: function proxyHandler (item) {
    var _vm=this;
      return (function () {
        _vm.select(item.id)
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