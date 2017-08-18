'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            list: []
        }, _this.methods = {
            select: function select(id, evt) {
                this.$root.$navigate({ url: 'chat?id=' + id });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'loadMessage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _api2.default.getMessageList();

                            case 2:
                                this.list = _context.sent;

                                this.$apply();

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function loadMessage() {
                return _ref2.apply(this, arguments);
            }

            return loadMessage;
        }()
    }]);

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInNlbGVjdCIsImlkIiwiZXZ0IiwiJHJvb3QiLCIkbmF2aWdhdGUiLCJ1cmwiLCJnZXRNZXNzYWdlTGlzdCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBRWpCQyxJLEdBQU87QUFDSEMsa0JBQU07QUFESCxTLFFBSVBDLE8sR0FBVTtBQUNOQyxrQkFETSxrQkFDRUMsRUFERixFQUNNQyxHQUROLEVBQ1c7QUFDYixxQkFBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCLEVBQUNDLEtBQUssYUFBYUosRUFBbkIsRUFBckI7QUFDSDtBQUhLLFM7Ozs7Ozs7Ozs7Ozt1Q0FPWSxjQUFJSyxjQUFKLEU7OztBQUFsQixxQ0FBS1IsSTs7QUFDTCxxQ0FBS1MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWQ2QixlQUFLQyxTOztrQkFBckJaLE8iLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vY29tbW9uL2FwaSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0IChpZCwgZXZ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kbmF2aWdhdGUoe3VybDogJ2NoYXQ/aWQ9JyArIGlkfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXN5bmMgbG9hZE1lc3NhZ2UgKCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ID0gYXdhaXQgYXBpLmdldE1lc3NhZ2VMaXN0KCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG5cbiAgICB9XG4iXX0=