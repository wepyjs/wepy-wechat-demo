"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _contact = _interopRequireDefault(require('../mocks/contact.js'));

var _history = _interopRequireDefault(require('../mocks/history.js'));

var _reply = _interopRequireDefault(require('../mocks/reply.js'));

var _global = _interopRequireDefault(require('global.js'));

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  getRandomReply: function getRandomReply(id) {
    var template = _reply["default"][id];
    if (!template) template = _reply["default"]['other'];
    var index = Math.random() * template.length >> 0;
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(template[index]);
      });
    });
  },
  getContact: function getContact() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(_contact["default"]);
      });
    });
  },
  getUserInfo: function getUserInfo() {
    return new Promise(function (resolve, reject) {
      var cache = _global["default"].getUserInfo();

      if (cache) {
        resolve(cache);
      } else {
        _core["default"].wx.login().then(function (res) {
          _core["default"].wx.getUserInfo().then(function (res) {
            console.log('getuserinfo success');
            console.log(res);

            _global["default"].setUserInfo(res.userInfo);

            resolve(res.userInfo);
          })["catch"](reject);
        })["catch"](reject);
      }
    });
  },
  // select * from history h
  // left join contact c
  // on (h.from == c.id or h.to == c.id)
  // where h.from = :id or h.to = :id or :id = '';
  // order by h.time asc;
  getHistory: function getHistory(id) {
    var _this = this;

    var history = _core["default"].wx.getStorageSync('_wechat_history_') || _history["default"];

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        var sorted = history.sort(function (a, b) {
          return a.time - b.time;
        });
        if (!id) resolve(_this.leftJoin(sorted, _contact["default"]));else {
          resolve(_this.leftJoin(sorted.filter(function (v) {
            return v.from === id || v.to === id;
          }), _contact["default"]));
        }
      });
    });
  },
  // select *, (select msg from history h2 where h2.from = c.id or h2.to = c.id order by time desc limit 1) as lastmsg
  // from history h
  // left join contact c
  // on (h.from == c.id or h.to == c.id)
  // where h.from = :id or h.to = :id or :id = '';
  // order by h.time desc;
  getMessageList: function getMessageList() {
    var _this2 = this;

    var history = _core["default"].wx.getStorageSync('_wechat_history_') || _history["default"];

    return new Promise(function (resolve, reject) {
      var distince = [];
      var rst = [];
      var sorted = history.sort(function (a, b) {
        return b.time - a.time;
      });
      sorted.forEach(function (v) {
        if (v.from !== 'me' && distince.indexOf(v.from) === -1) {
          distince.push(v.from);
        }

        if (v.to !== 'me' && distince.indexOf(v.to) === -1) {
          distince.push(v.to);
        }
      });
      distince.forEach(function (v) {
        var pmsg = sorted.filter(function (msg) {
          return msg.to === v || msg.from === v;
        });
        var lastmsg = pmsg.length ? pmsg[0].msg : '';
        rst.push({
          id: v,
          lastmsg: lastmsg
        });
      });
      setTimeout(function () {
        resolve(_this2.leftJoin(rst, _contact["default"]));
      });
    });
  },
  leftJoin: function leftJoin(original, contacts) {
    var contactObj = _global["default"].getContact();

    var rst = [];
    original.forEach(function (v) {
      if (!v.id) {
        v.id = v.from !== 'me' ? v.from : v.to;
      }

      if (v.id) {
        if (v.id !== 'me') {
          v.name = contactObj[v.id].name;
          v.icon = (_core["default"].env === 'web' ? './mocks/users/' : '../mocks/users/') + contactObj[v.id].id + '.png';
        }

        rst.push(v);
      }
    });
    return rst;
  },
  sendMsg: function sendMsg(to, msg) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
    return this.msg('me', to, msg, type);
  },
  replyMsg: function replyMsg(frm, msg) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
    return this.msg(frm, 'me', msg, type);
  },
  msg: function msg(frm, to, _msg) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'text';

    var history = _core["default"].wx.getStorageSync('_wechat_history_') || _history["default"];

    var msgObj = {
      to: to,
      msg: _msg,
      type: type,
      from: frm,
      time: +new Date()
    };
    history.push(msgObj);
    return new Promise(function (resolve, reject) {
      _core["default"].wx.setStorage({
        key: '_wechat_history_',
        data: history
      }).then(function () {
        resolve(msgObj);
      })["catch"](reject);
    });
  },
  clearMsg: function clearMsg(id) {
    return _core["default"].wx.clearStorage();
  }
};
exports["default"] = _default;