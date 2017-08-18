'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var l = 26;
var table = ['★'];

while (l--) {
    table.push(String.fromCharCode(65 + (26 - l - 1)));
}
table.push('#');

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
            tags: table
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFscGhhLmpzIl0sIm5hbWVzIjpbImwiLCJ0YWJsZSIsInB1c2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJNZXNzYWdlIiwiZGF0YSIsInRhZ3MiLCJtZXRob2RzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxJQUFJLEVBQVI7QUFDQSxJQUFJQyxRQUFRLENBQUMsR0FBRCxDQUFaOztBQUVBLE9BQU9ELEdBQVAsRUFBWTtBQUNSQyxVQUFNQyxJQUFOLENBQVdDLE9BQU9DLFlBQVAsQ0FBb0IsTUFBTSxLQUFLSixDQUFMLEdBQVMsQ0FBZixDQUFwQixDQUFYO0FBQ0g7QUFDREMsTUFBTUMsSUFBTixDQUFXLEdBQVg7O0lBRXFCRyxPOzs7Ozs7Ozs7Ozs7Ozs0TEFFakJDLEksR0FBTztBQUNIQyxrQkFBTU47QUFESCxTLFFBSVBPLE8sR0FBVSxFOzs7OztpQ0FHQSxDQUNUOzs7O0VBVmdDLGVBQUtDLFM7O2tCQUFyQkosTyIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgbGV0IGwgPSAyNjtcbiAgICBsZXQgdGFibGUgPSBbJ+KYhSddO1xuXG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgICB0YWJsZS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyAoMjYgLSBsIC0gMSkpKTtcbiAgICB9XG4gICAgdGFibGUucHVzaCgnIycpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGFnczogdGFibGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQgKCkge1xuICAgICAgICB9XG4gICAgfVxuIl19