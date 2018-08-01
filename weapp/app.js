'use strict';

var _wepy = require('vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

require('vendor.js')(0)

var _usePromisify = require('vendor.js')(1)

var _usePromisify2 = _interopRequireDefault(_usePromisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//


_wepy2.default.use(_usePromisify2.default, _wepy2.default);

_wepy2.default.app({

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
    getUserInfo: function getUserInfo() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!_this.globalData.userInfo) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return', _this.globalData.userInfo);

                        case 2:
                            _context.next = 4;
                            return wx.login();

                        case 4:
                            _context.next = 6;
                            return wx.getUserInfo();

                        case 6:
                            res = _context.sent;

                            _this.globalData.userInfo = res.userInfo;
                            return _context.abrupt('return', res.userInfo);

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
}, {a: 1});