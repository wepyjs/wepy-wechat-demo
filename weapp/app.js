"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('vendor.js')(0));

var _core = _interopRequireDefault(require('vendor.js')(1));

var _usePromisify = _interopRequireDefault(require('vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].use(_usePromisify["default"], _core["default"]);

_core["default"].app({
  config: {
    'pages': ['pages/index', 'pages/chat'],
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#3b3a40',
      'navigationBarTitleText': 'WeChat',
      'navigationBarTextStyle': 'black'
    }
  },
  globalData: {
    userInfo: null
  },
  onLaunch: function onLaunch() {},
  getUserInfo: function () {
    var _getUserInfo = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var res;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.globalData.userInfo) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", this.globalData.userInfo);

            case 2:
              _context.next = 4;
              return wx.login();

            case 4:
              _context.next = 6;
              return wx.getUserInfo();

            case 6:
              res = _context.sent;
              this.globalData.userInfo = res.userInfo;
              return _context.abrupt("return", res.userInfo);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getUserInfo() {
      return _getUserInfo.apply(this, arguments);
    }

    return getUserInfo;
  }()
}, {info: {"noPromiseAPI":[]}, handlers: {}, models: {} });