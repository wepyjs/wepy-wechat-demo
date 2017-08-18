'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
    _inherits(_class, _wepy$app);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.config = {
            'pages': ['pages/index', 'pages/chat'],
            'window': {
                'backgroundTextStyle': 'light',
                'navigationBarBackgroundColor': '#3b3a40',
                'navigationBarTitleText': 'WeChat',
                'navigationBarTextStyle': 'black'
            }
        };
        _this.globalData = {
            userInfo: null
        };

        _this.use('promisify');
        _this.use('requestfix');
        return _this;
    }

    _createClass(_class, [{
        key: 'onLaunch',
        value: function onLaunch() {}
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.globalData.userInfo) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return', this.globalData.userInfo);

                            case 2:
                                _context.next = 4;
                                return wx.login();

                            case 4:
                                _context.next = 6;
                                return wx.getUserInfo();

                            case 6:
                                res = _context.sent;

                                this.globalData.userInfo = res.userInfo;
                                return _context.abrupt('return', res.userInfo);

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUserInfo() {
                return _ref.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3eCIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBaUJJLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsY0FiZkEsTUFhZSxHQWJOO0FBQ0wscUJBQVMsQ0FDTCxhQURLLEVBRUwsWUFGSyxDQURKO0FBS0wsc0JBQVU7QUFDTix1Q0FBdUIsT0FEakI7QUFFTixnREFBZ0MsU0FGMUI7QUFHTiwwQ0FBMEIsUUFIcEI7QUFJTiwwQ0FBMEI7QUFKcEI7QUFMTCxTQWFNO0FBQUEsY0FNZkMsVUFOZSxHQU1GO0FBQ1RDLHNCQUFVO0FBREQsU0FORTs7QUFFWCxjQUFLQyxHQUFMLENBQVMsV0FBVDtBQUNBLGNBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBSFc7QUFJZDs7OzttQ0FNVSxDQUNWOzs7Ozs7Ozs7O3FDQUdPLEtBQUtGLFVBQUwsQ0FBZ0JDLFE7Ozs7O2lFQUNULEtBQUtELFVBQUwsQ0FBZ0JDLFE7Ozs7dUNBRXJCRSxHQUFHQyxLQUFILEU7Ozs7dUNBQ1VELEdBQUdFLFdBQUgsRTs7O0FBQVpDLG1DOztBQUNKLHFDQUFLTixVQUFMLENBQWdCQyxRQUFoQixHQUEyQkssSUFBSUwsUUFBL0I7aUVBQ09LLElBQUlMLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQ1UsZUFBS00sRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgJ3BhZ2VzJzogW1xuICAgICAgICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgICAgICdwYWdlcy9jaGF0J1xuICAgICAgICBdLFxuICAgICAgICAnd2luZG93Jzoge1xuICAgICAgICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnIzNiM2E0MCcsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICdXZUNoYXQnLFxuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnYmxhY2snXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgdXNlckluZm86IG51bGxcbiAgICB9O1xuXG4gICAgb25MYXVuY2goKSB7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm87XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgd3gubG9naW4oKTtcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHd4LmdldFVzZXJJbmZvKCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgICAgcmV0dXJuIHJlcy51c2VySW5mbztcbiAgICB9XG59XG4iXX0=