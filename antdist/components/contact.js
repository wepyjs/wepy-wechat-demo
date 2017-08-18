'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _alpha = require('./alpha.js');

var _alpha2 = _interopRequireDefault(_alpha);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

var _global = require('./../common/global.js');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_wepy$component) {
    _inherits(Message, _wepy$component);

    function Message() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            alpha: _alpha2.default
        }, _this.data = {
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
        }, _this.methods = {
            select: function select(id, evt) {
                this.$root.$navigate({ url: 'chat?id=' + id });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'onLoad',
        value: function onLoad() {
            this.loadContact();
        }
    }, {
        key: 'format',
        value: function format(arr) {
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
    }, {
        key: 'loadContact',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var contacts, contactObj;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                contacts = void 0;
                                contactObj = {};
                                _context.next = 4;
                                return _api2.default.getContact();

                            case 4:
                                contacts = _context.sent;


                                contacts.forEach(function (v) {
                                    contactObj[v.id] = v;
                                });

                                _global2.default.setContact(contactObj);

                                this.total = contacts.length;
                                this.contacts = this.format(contacts);
                                this.$apply();

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function loadContact() {
                return _ref2.apply(this, arguments);
            }

            return loadContact;
        }()
    }]);

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImNvbXBvbmVudHMiLCJhbHBoYSIsImRhdGEiLCJ0b3BsaXN0IiwiaGVhZGVyIiwiZW52IiwibmFtZSIsImNvbnRhY3RzIiwidG90YWwiLCJtZXRob2RzIiwic2VsZWN0IiwiaWQiLCJldnQiLCIkcm9vdCIsIiRuYXZpZ2F0ZSIsInVybCIsImxvYWRDb250YWN0IiwiYXJyIiwiYyIsIm9iaiIsImZvckVhY2giLCJpdGVtIiwidG9VcHBlckNhc2UiLCJwdXNoIiwiY29udGFjdE9iaiIsImdldENvbnRhY3QiLCJ2Iiwic2V0Q29udGFjdCIsImxlbmd0aCIsImZvcm1hdCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUVqQkMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQUliQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FDTDtBQUNJQyx3QkFBUSxlQUFLQyxHQUFMLEtBQWEsS0FBYixHQUFxQix5QkFBckIsR0FBaUQsMEJBRDdEO0FBRUlDLHNCQUFNO0FBRlYsYUFESyxFQUtMO0FBQ0lGLHdCQUFRLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLHlCQUFyQixHQUFpRCwwQkFEN0Q7QUFFSUMsc0JBQU07QUFGVixhQUxLLEVBU0w7QUFDSUYsd0JBQVEsZUFBS0MsR0FBTCxLQUFhLEtBQWIsR0FBcUIsa0JBQXJCLEdBQTBDLG1CQUR0RDtBQUVJQyxzQkFBTTtBQUZWLGFBVEssRUFhTDtBQUNJRix3QkFBUSxlQUFLQyxHQUFMLEtBQWEsS0FBYixHQUFxQixxQkFBckIsR0FBNkMsc0JBRHpEO0FBRUlDLHNCQUFNO0FBRlYsYUFiSyxDQUROO0FBbUJIQyxzQkFBVSxFQW5CUDtBQW9CSEMsbUJBQU87QUFwQkosUyxRQXNCUEMsTyxHQUFVO0FBQ05DLGtCQURNLGtCQUNFQyxFQURGLEVBQ01DLEdBRE4sRUFDVztBQUNiLHFCQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUIsRUFBQ0MsS0FBSyxhQUFhSixFQUFuQixFQUFyQjtBQUNIO0FBSEssUzs7Ozs7aUNBTUE7QUFDTixpQkFBS0ssV0FBTDtBQUNIOzs7K0JBRU9DLEcsRUFBSztBQUNULGdCQUFJQyxVQUFKO0FBQUEsZ0JBQU9DLE1BQU0sRUFBYjtBQUNBRixnQkFBSUcsT0FBSixDQUFZLFVBQUNDLElBQUQsRUFBVTtBQUNsQkgsb0JBQUlHLEtBQUtWLEVBQUwsQ0FBUSxDQUFSLEVBQVdXLFdBQVgsRUFBSjtBQUNBLG9CQUFJSCxJQUFJRCxDQUFKLENBQUosRUFBWTtBQUNSQyx3QkFBSUQsQ0FBSixFQUFPSyxJQUFQLENBQVlGLElBQVo7QUFDSCxpQkFGRCxNQUVPO0FBQ0hGLHdCQUFJRCxDQUFKLElBQVMsQ0FBQ0csSUFBRCxDQUFUO0FBQ0g7QUFDSixhQVBEO0FBUUEsbUJBQU9GLEdBQVA7QUFDSDs7Ozs7Ozs7OztBQUdPWix3QztBQUNBaUIsMEMsR0FBYSxFOzt1Q0FFQSxjQUFJQyxVQUFKLEU7OztBQUFqQmxCLHdDOzs7QUFFQUEseUNBQVNhLE9BQVQsQ0FBaUIsVUFBQ00sQ0FBRCxFQUFPO0FBQ3BCRiwrQ0FBV0UsRUFBRWYsRUFBYixJQUFtQmUsQ0FBbkI7QUFDSCxpQ0FGRDs7QUFJQSxpREFBT0MsVUFBUCxDQUFrQkgsVUFBbEI7O0FBRUEscUNBQUtoQixLQUFMLEdBQWFELFNBQVNxQixNQUF0QjtBQUNBLHFDQUFLckIsUUFBTCxHQUFnQixLQUFLc0IsTUFBTCxDQUFZdEIsUUFBWixDQUFoQjtBQUNBLHFDQUFLdUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpFNkIsZUFBS0MsUzs7a0JBQXJCaEMsTyIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEFscGhhIGZyb20gJy4vYWxwaGEnO1xuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vY29tbW9uL2FwaSc7XG4gICAgaW1wb3J0IGdsb2JhbCBmcm9tICcuLi9jb21tb24vZ2xvYmFsJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGFscGhhOiBBbHBoYVxuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB0b3BsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9uZXdfZnJpZW5kLnBuZycgOiAnLi4vaW1hZ2VzL25ld19mcmllbmQucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+aWsOeahOaci+WPiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL2dyb3VwX2NoYXQucG5nJyA6ICcuLi9pbWFnZXMvZ3JvdXBfY2hhdC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn576k6IGKJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvdGFnLnBuZycgOiAnLi4vaW1hZ2VzL3RhZy5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5qCH562+JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvcHVibGljLnBuZycgOiAnLi4vaW1hZ2VzL3B1YmxpYy5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5YWs5LyX5Y+3JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbnRhY3RzOiB7fSxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0IChpZCwgZXZ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kbmF2aWdhdGUoe3VybDogJ2NoYXQ/aWQ9JyArIGlkfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCAoYXJyKSB7XG4gICAgICAgICAgICBsZXQgYywgb2JqID0ge307XG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGMgPSBpdGVtLmlkWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG9ialtjXSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpbY10ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmpbY10gPSBbaXRlbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgbG9hZENvbnRhY3QgKCkge1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RzO1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RPYmogPSB7fTtcblxuICAgICAgICAgICAgY29udGFjdHMgPSBhd2FpdCBhcGkuZ2V0Q29udGFjdCgpO1xuXG4gICAgICAgICAgICBjb250YWN0cy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGFjdE9ialt2LmlkXSA9IHY7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2xvYmFsLnNldENvbnRhY3QoY29udGFjdE9iaik7XG5cbiAgICAgICAgICAgIHRoaXMudG90YWwgPSBjb250YWN0cy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmNvbnRhY3RzID0gdGhpcy5mb3JtYXQoY29udGFjdHMpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==