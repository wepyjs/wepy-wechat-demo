'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

var _global = require('./../common/global.js');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chartboard = function (_wepy$component) {
    _inherits(Chartboard, _wepy$component);

    function Chartboard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Chartboard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chartboard.__proto__ || Object.getPrototypeOf(Chartboard)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            message: [],
            focus: false
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Chartboard, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'fixPosition',
        value: function fixPosition(focus) {
            this.focus = focus;
            this.$apply();
        }
    }, {
        key: 'loadMessage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var userinfo, message;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                userinfo = void 0, message = void 0;
                                _context.prev = 1;
                                _context.next = 4;
                                return _api2.default.getUserInfo();

                            case 4:
                                userinfo = _context.sent;
                                _context.next = 11;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                console.log(_context.t0);
                                userinfo = {
                                    nickName: 'Gcaufy',
                                    id: 'gcaufy',
                                    avatar: _wepy2.default.env === 'web' ? './images/myheader.png' : '../images/myheader.png'
                                };

                            case 11:
                                this.current = userinfo;
                                _context.prev = 12;
                                _context.next = 15;
                                return _api2.default.getHistory(id);

                            case 15:
                                message = _context.sent;
                                _context.next = 23;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t1 = _context['catch'](12);

                                message = null;
                                console.error('getHistory fail');
                                console.log(_context.t1);

                            case 23:
                                if (message) {
                                    this.message = message;
                                    this.to = id;
                                    this.message.forEach(function (msg) {
                                        if (msg.from === 'me') {
                                            msg.name = userinfo.nickName;
                                            msg.icon = userinfo.avatar;
                                        }
                                    });
                                    this.$apply();
                                }

                            case 24:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7], [12, 18]]);
            }));

            function loadMessage(_x) {
                return _ref2.apply(this, arguments);
            }

            return loadMessage;
        }()
    }, {
        key: 'sendMessage',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(msg) {
                var id, msgObj, randomReply;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                id = this.to;
                                _context2.next = 3;
                                return _api2.default.sendMsg(id, msg);

                            case 3:
                                msgObj = _context2.sent;


                                msgObj.name = this.current.nickName;
                                msgObj.icon = this.current.avatar;
                                this.message.push(msgObj);

                                this.$apply();
                                this.$invoke('../myinput', 'clear');

                                _context2.next = 11;
                                return _api2.default.getRandomReply(id);

                            case 11:
                                randomReply = _context2.sent;

                                this.replyMessage(randomReply);

                            case 13:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function sendMessage(_x2) {
                return _ref3.apply(this, arguments);
            }

            return sendMessage;
        }()
    }, {
        key: 'replyMessage',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(msg) {
                var id, contact, msgObj;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                id = this.to;
                                contact = _global2.default.getContact(id);
                                _context3.next = 4;
                                return _api2.default.replyMsg(id, msg);

                            case 4:
                                msgObj = _context3.sent;

                                msgObj.name = contact.name;
                                msgObj.icon = contact.icon;

                                this.message.push(msgObj);
                                this.$apply();

                            case 9:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function replyMessage(_x3) {
                return _ref4.apply(this, arguments);
            }

            return replyMessage;
        }()
    }]);

    return Chartboard;
}(_wepy2.default.component);

exports.default = Chartboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0Ym9hcmQuanMiXSwibmFtZXMiOlsiQ2hhcnRib2FyZCIsImRhdGEiLCJtZXNzYWdlIiwiZm9jdXMiLCJtZXRob2RzIiwiJGFwcGx5IiwiaWQiLCJ1c2VyaW5mbyIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZW52IiwiY3VycmVudCIsImdldEhpc3RvcnkiLCJlcnJvciIsInRvIiwiZm9yRWFjaCIsIm1zZyIsImZyb20iLCJuYW1lIiwiaWNvbiIsInNlbmRNc2ciLCJtc2dPYmoiLCJwdXNoIiwiJGludm9rZSIsImdldFJhbmRvbVJlcGx5IiwicmFuZG9tUmVwbHkiLCJyZXBseU1lc3NhZ2UiLCJjb250YWN0IiwiZ2V0Q29udGFjdCIsInJlcGx5TXNnIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUVqQkMsSSxHQUFPO0FBQ0hDLHFCQUFTLEVBRE47QUFFSEMsbUJBQU87QUFGSixTLFFBS1BDLE8sR0FBVSxFOzs7OztpQ0FHQSxDQUNUOzs7b0NBRVlELEssRUFBTztBQUNoQixpQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsaUJBQUtFLE1BQUw7QUFDSDs7OztpR0FFa0JDLEU7Ozs7OztBQUNYQyx3QyxXQUFVTCxPOzs7dUNBRU8sY0FBSU0sV0FBSixFOzs7QUFBakJELHdDOzs7Ozs7OztBQUVBRSx3Q0FBUUMsR0FBUjtBQUNBSCwyQ0FBVztBQUNQSSw4Q0FBVSxRQURIO0FBRVBMLHdDQUFJLFFBRkc7QUFHUE0sK0NBQVcsZUFBS0MsR0FBTCxLQUFhLEtBQWIsR0FBcUIsdUJBQXJCLEdBQStDO0FBSG5ELGlDQUFYOzs7QUFNSixxQ0FBS0MsT0FBTCxHQUFlUCxRQUFmOzs7dUNBRW9CLGNBQUlRLFVBQUosQ0FBZVQsRUFBZixDOzs7QUFBaEJKLHVDOzs7Ozs7OztBQUVBQSwwQ0FBVSxJQUFWO0FBQ0FPLHdDQUFRTyxLQUFSLENBQWMsaUJBQWQ7QUFDQVAsd0NBQVFDLEdBQVI7OztBQUVKLG9DQUFJUixPQUFKLEVBQWE7QUFDVCx5Q0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EseUNBQUtlLEVBQUwsR0FBVVgsRUFBVjtBQUNBLHlDQUFLSixPQUFMLENBQWFnQixPQUFiLENBQXFCLFVBQUNDLEdBQUQsRUFBUztBQUMxQiw0Q0FBSUEsSUFBSUMsSUFBSixLQUFhLElBQWpCLEVBQXVCO0FBQ25CRCxnREFBSUUsSUFBSixHQUFXZCxTQUFTSSxRQUFwQjtBQUNBUSxnREFBSUcsSUFBSixHQUFXZixTQUFTSyxTQUFwQjtBQUNIO0FBQ0oscUNBTEQ7QUFNQSx5Q0FBS1AsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUdjYyxHOzs7Ozs7QUFDWGIsa0MsR0FBSyxLQUFLVyxFOzt1Q0FDSyxjQUFJTSxPQUFKLENBQVlqQixFQUFaLEVBQWdCYSxHQUFoQixDOzs7QUFBZkssc0M7OztBQUVKQSx1Q0FBT0gsSUFBUCxHQUFjLEtBQUtQLE9BQUwsQ0FBYUgsUUFBM0I7QUFDQWEsdUNBQU9GLElBQVAsR0FBYyxLQUFLUixPQUFMLENBQWFGLFNBQTNCO0FBQ0EscUNBQUtWLE9BQUwsQ0FBYXVCLElBQWIsQ0FBa0JELE1BQWxCOztBQUVBLHFDQUFLbkIsTUFBTDtBQUNBLHFDQUFLcUIsT0FBTCxDQUFhLFlBQWIsRUFBMkIsT0FBM0I7Ozt1Q0FFd0IsY0FBSUMsY0FBSixDQUFtQnJCLEVBQW5CLEM7OztBQUFwQnNCLDJDOztBQUNKLHFDQUFLQyxZQUFMLENBQWtCRCxXQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FHZ0JULEc7Ozs7OztBQUNaYixrQyxHQUFLLEtBQUtXLEU7QUFDVmEsdUMsR0FBVSxpQkFBT0MsVUFBUCxDQUFrQnpCLEVBQWxCLEM7O3VDQUNLLGNBQUkwQixRQUFKLENBQWExQixFQUFiLEVBQWlCYSxHQUFqQixDOzs7QUFBZkssc0M7O0FBQ0pBLHVDQUFPSCxJQUFQLEdBQWNTLFFBQVFULElBQXRCO0FBQ0FHLHVDQUFPRixJQUFQLEdBQWNRLFFBQVFSLElBQXRCOztBQUVBLHFDQUFLcEIsT0FBTCxDQUFhdUIsSUFBYixDQUFrQkQsTUFBbEI7QUFDQSxxQ0FBS25CLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRWdDLGVBQUs0QixTOztrQkFBeEJqQyxVIiwiZmlsZSI6ImNoYXJ0Ym9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vY29tbW9uL2FwaSc7XG4gICAgaW1wb3J0IGdsb2JhbCBmcm9tICcuLi9jb21tb24vZ2xvYmFsJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0Ym9hcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFtdLFxuICAgICAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIH07XG5cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpeFBvc2l0aW9uIChmb2N1cykge1xuICAgICAgICAgICAgdGhpcy5mb2N1cyA9IGZvY3VzO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGxvYWRNZXNzYWdlIChpZCkge1xuICAgICAgICAgICAgbGV0IHVzZXJpbmZvLCBtZXNzYWdlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB1c2VyaW5mbyA9IGF3YWl0IGFwaS5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIHVzZXJpbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogJ0djYXVmeScsXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnZ2NhdWZ5JyxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvbXloZWFkZXIucG5nJyA6ICcuLi9pbWFnZXMvbXloZWFkZXIucG5nJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdXNlcmluZm87XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBhd2FpdCBhcGkuZ2V0SGlzdG9yeShpZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZ2V0SGlzdG9yeSBmYWlsJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy50byA9IGlkO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5mcm9tID09PSAnbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cubmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmljb24gPSB1c2VyaW5mby5hdmF0YXJVcmw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgc2VuZE1lc3NhZ2UgKG1zZykge1xuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy50bztcbiAgICAgICAgICAgIGxldCBtc2dPYmogPSBhd2FpdCBhcGkuc2VuZE1zZyhpZCwgbXNnKTtcblxuICAgICAgICAgICAgbXNnT2JqLm5hbWUgPSB0aGlzLmN1cnJlbnQubmlja05hbWU7XG4gICAgICAgICAgICBtc2dPYmouaWNvbiA9IHRoaXMuY3VycmVudC5hdmF0YXJVcmw7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UucHVzaChtc2dPYmopO1xuXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCcuLi9teWlucHV0JywgJ2NsZWFyJyk7XG5cbiAgICAgICAgICAgIGxldCByYW5kb21SZXBseSA9IGF3YWl0IGFwaS5nZXRSYW5kb21SZXBseShpZCk7XG4gICAgICAgICAgICB0aGlzLnJlcGx5TWVzc2FnZShyYW5kb21SZXBseSk7XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyByZXBseU1lc3NhZ2UgKG1zZykge1xuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy50bztcbiAgICAgICAgICAgIGxldCBjb250YWN0ID0gZ2xvYmFsLmdldENvbnRhY3QoaWQpO1xuICAgICAgICAgICAgbGV0IG1zZ09iaiA9IGF3YWl0IGFwaS5yZXBseU1zZyhpZCwgbXNnKTtcbiAgICAgICAgICAgIG1zZ09iai5uYW1lID0gY29udGFjdC5uYW1lO1xuICAgICAgICAgICAgbXNnT2JqLmljb24gPSBjb250YWN0Lmljb247XG5cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5wdXNoKG1zZ09iaik7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgfVxuIl19