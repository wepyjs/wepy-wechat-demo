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

var Tab = function (_wepy$component) {
    _inherits(Tab, _wepy$component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            active: {
                twoWay: true
            }
        }, _this.data = {}, _this.methods = {
            change: function change(idx, evt) {
                this.active = +idx;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tab, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsImFjdGl2ZSIsInR3b1dheSIsImRhdGEiLCJtZXRob2RzIiwiY2hhbmdlIiwiaWR4IiwiZXZ0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O29MQUVqQkMsSyxHQUFRO0FBQ0pDLG9CQUFRO0FBQ0pDLHdCQUFRO0FBREo7QUFESixTLFFBS1JDLEksR0FBTyxFLFFBR1BDLE8sR0FBVTtBQUNOQyxrQkFETSxrQkFDRUMsR0FERixFQUNPQyxHQURQLEVBQ1k7QUFDZCxxQkFBS04sTUFBTCxHQUFjLENBQUNLLEdBQWY7QUFDSDtBQUhLLFM7Ozs7O2lDQU1BLENBQ1Q7Ozs7RUFqQjRCLGVBQUtFLFM7O2tCQUFqQlQsRyIsImZpbGUiOiJ0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2UgKGlkeCwgZXZ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSAraWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=