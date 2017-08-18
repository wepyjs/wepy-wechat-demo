'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./list.js');

var _list2 = _interopRequireDefault(_list);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Me = function (_wepy$component) {
    _inherits(Me, _wepy$component);

    function Me() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Me);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Me.__proto__ || Object.getPrototypeOf(Me)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "album": { "v-bind:list.once": "dAlbum" }, "emoji": { "v-bind:list.once": "dSetting" }, "setting": { "v-bind:list.once": "dEmoji" } }, _this.$events = {}, _this.components = {
            album: _list2.default,
            emoji: _list2.default,
            setting: _list2.default
        }, _this.data = {
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
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Me, [{
        key: 'onLoad',
        value: function onLoad() {
            this.setUserInfo();
        }
    }, {
        key: 'setUserInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                res = void 0;
                                _context.prev = 1;
                                _context.next = 4;
                                return _api2.default.getUserInfo();

                            case 4:
                                res = _context.sent;
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                res = this.userInfo;

                            case 10:

                                ['nickName', 'avatarUrl'].forEach(function (v) {
                                    return _this2.userInfo[v] = res[v];
                                });
                                this.$apply();

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7]]);
            }));

            function setUserInfo() {
                return _ref2.apply(this, arguments);
            }

            return setUserInfo;
        }()
    }, {
        key: 'clearHistory',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _api2.default.clearMsg(id);

                            case 2:
                                this.$root.$navigate({ url: 'index' });

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function clearHistory(_x) {
                return _ref3.apply(this, arguments);
            }

            return clearHistory;
        }()
    }]);

    return Me;
}(_wepy2.default.component);

exports.default = Me;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIk1lIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJhbGJ1bSIsImVtb2ppIiwic2V0dGluZyIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiaWQiLCJhdmF0YXJVcmwiLCJlbnYiLCJkQWxidW0iLCJpY29uIiwidGl0bGUiLCJkU2V0dGluZyIsImFjdGlvbiIsImNsZWFySGlzdG9yeSIsImRFbW9qaSIsIm1ldGhvZHMiLCJzZXRVc2VySW5mbyIsInJlcyIsImdldFVzZXJJbmZvIiwiZm9yRWFjaCIsInYiLCIkYXBwbHkiLCJjbGVhck1zZyIsIiRyb290IiwiJG5hdmlnYXRlIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEU7Ozs7Ozs7Ozs7Ozs7O2tMQUVsQkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLG9CQUFtQixRQUFwQixFQUFULEVBQXVDLFNBQVEsRUFBQyxvQkFBbUIsVUFBcEIsRUFBL0MsRUFBK0UsV0FBVSxFQUFDLG9CQUFtQixRQUFwQixFQUF6RixFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUNBREU7QUFFRkMsaUNBRkU7QUFHRkM7QUFIRSxTLFFBTU5DLEksR0FBTztBQUNIQyxzQkFBVTtBQUNOQywwQkFBVSxRQURKO0FBRU5DLG9CQUFJLFFBRkU7QUFHTkMsMkJBQVcsZUFBS0MsR0FBTCxLQUFhLEtBQWIsR0FBcUIsdUJBQXJCLEdBQStDO0FBSHBELGFBRFA7QUFNSEMsb0JBQVEsQ0FDSixFQUFDQyxNQUFNLGVBQUtGLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG9CQUFyQixHQUE0QyxxQkFBbkQsRUFBMEVHLE9BQU8sSUFBakYsRUFESSxFQUVKLEVBQUNELE1BQU0sZUFBS0YsR0FBTCxLQUFhLEtBQWIsR0FBcUIsc0JBQXJCLEdBQThDLHVCQUFyRCxFQUE4RUcsT0FBTyxJQUFyRixFQUZJLEVBR0osRUFBQ0QsTUFBTSxlQUFLRixHQUFMLEtBQWEsS0FBYixHQUFxQixxQkFBckIsR0FBNkMsc0JBQXBELEVBQTRFRyxPQUFPLElBQW5GLEVBSEksRUFJSixFQUFDRCxNQUFNLGVBQUtGLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG1CQUFyQixHQUEyQyxvQkFBbEQsRUFBd0VHLE9BQU8sSUFBL0UsRUFKSSxDQU5MO0FBWUhDLHNCQUFVLENBQ047QUFDSU4sb0JBQUksT0FEUjtBQUVJSSxzQkFBTSx1QkFGVjtBQUdJQyx1QkFBTyxVQUhYO0FBSUlFLHNCQUpKLG9CQUlhO0FBQ0wseUJBQUtDLFlBQUw7QUFDSDtBQU5MLGFBRE0sQ0FaUDtBQXNCSEMsb0JBQVEsQ0FBQyxFQUFDTCxNQUFNLGVBQUtGLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG9CQUFyQixHQUE0QyxxQkFBbkQsRUFBMEVHLE9BQU8sSUFBakYsRUFBRDtBQXRCTCxTLFFBeUJQSyxPLEdBQVUsRTs7Ozs7aUNBR0E7QUFDTixpQkFBS0MsV0FBTDtBQUNIOzs7Ozs7Ozs7Ozs7QUFHT0MsbUM7Ozt1Q0FFWSxjQUFJQyxXQUFKLEU7OztBQUFaRCxtQzs7Ozs7Ozs7QUFFQUEsc0NBQU0sS0FBS2QsUUFBWDs7OztBQUdKLGlDQUFDLFVBQUQsRUFBYSxXQUFiLEVBQTBCZ0IsT0FBMUIsQ0FBa0MsVUFBQ0MsQ0FBRDtBQUFBLDJDQUFPLE9BQUtqQixRQUFMLENBQWNpQixDQUFkLElBQW1CSCxJQUFJRyxDQUFKLENBQTFCO0FBQUEsaUNBQWxDO0FBQ0EscUNBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBR2dCaEIsRTs7Ozs7O3VDQUNWLGNBQUlpQixRQUFKLENBQWFqQixFQUFiLEM7OztBQUNOLHFDQUFLa0IsS0FBTCxDQUFXQyxTQUFYLENBQXFCLEVBQUNDLEtBQUssT0FBTixFQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhEd0IsZUFBS0MsUzs7a0JBQWhCL0IsRSIsImZpbGUiOiJtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICAgICAkcHJvcHMgPSB7XCJhbGJ1bVwiOntcInYtYmluZDpsaXN0Lm9uY2VcIjpcImRBbGJ1bVwifSxcImVtb2ppXCI6e1widi1iaW5kOmxpc3Qub25jZVwiOlwiZFNldHRpbmdcIn0sXCJzZXR0aW5nXCI6e1widi1iaW5kOmxpc3Qub25jZVwiOlwiZEVtb2ppXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGFsYnVtOiBMaXN0LFxuICAgICAgICAgICAgZW1vamk6IExpc3QsXG4gICAgICAgICAgICBzZXR0aW5nOiBMaXN0LFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICAgICAgbmlja05hbWU6ICdHY2F1ZnknLFxuICAgICAgICAgICAgICAgIGlkOiAnZ2NhdWZ5JyxcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9teWhlYWRlci5wbmcnIDogJy4uL2ltYWdlcy9teWhlYWRlci5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZEFsYnVtOiBbXG4gICAgICAgICAgICAgICAge2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9hbGJ1bS5wbmcnIDogJy4uL2ltYWdlcy9hbGJ1bS5wbmcnLCB0aXRsZTogJ+ebuOWGjCd9LFxuICAgICAgICAgICAgICAgIHtpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvY29sbGVjdC5wbmcnIDogJy4uL2ltYWdlcy9jb2xsZWN0LnBuZycsIHRpdGxlOiAn5pS26JePJ30sXG4gICAgICAgICAgICAgICAge2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy93YWxsZXQucG5nJyA6ICcuLi9pbWFnZXMvd2FsbGV0LnBuZycsIHRpdGxlOiAn6ZKx5YyFJ30sXG4gICAgICAgICAgICAgICAge2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9jYXJkLnBuZycgOiAnLi4vaW1hZ2VzL2NhcmQucG5nJywgdGl0bGU6ICfljaHljIUnfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkU2V0dGluZzogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdjbGVhcicsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICcuLi9pbWFnZXMvc2V0dGluZy5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+a4hemZpOacrOWcsOiBiuWkqeiusOW9lScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJIaXN0b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZEVtb2ppOiBbe2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9lbW9qaS5wbmcnIDogJy4uL2ltYWdlcy9lbW9qaS5wbmcnLCB0aXRsZTogJ+ihqOaDhSd9XSxcbiAgICAgICAgfTtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9O1xuXG4gICAgICAgIG9uTG9hZCAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcbiAgICAgICAgICAgIGxldCByZXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IGFwaS5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMudXNlckluZm87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFsnbmlja05hbWUnLCAnYXZhdGFyVXJsJ10uZm9yRWFjaCgodikgPT4gdGhpcy51c2VySW5mb1t2XSA9IHJlc1t2XSk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgY2xlYXJIaXN0b3J5IChpZCkge1xuICAgICAgICAgICAgYXdhaXQgYXBpLmNsZWFyTXNnKGlkKTtcbiAgICAgICAgICAgIHRoaXMuJHJvb3QuJG5hdmlnYXRlKHt1cmw6ICdpbmRleCd9KTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==