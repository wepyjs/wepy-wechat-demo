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

var List = function (_wepy$component) {
    _inherits(List, _wepy$component);

    function List() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, List);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: {}
        }, _this.data = {}, _this.methods = {
            click: function click(index, item, evt) {
                console.log('index: ' + index + 'clicked: ' + item.title);
                if (this.list[index].action) {
                    this.list[index].action.call(this.$parent);
                } else {
                    this.$root.showToast(item.title);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(List, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'load',
        value: function load(list) {
            this.list = list;
            this.$apply();
        }
    }]);

    return List;
}(_wepy2.default.component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsInByb3BzIiwibGlzdCIsImRhdGEiLCJtZXRob2RzIiwiY2xpY2siLCJpbmRleCIsIml0ZW0iLCJldnQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJhY3Rpb24iLCJjYWxsIiwiJHBhcmVudCIsIiRyb290Iiwic2hvd1RvYXN0IiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUVqQkMsSyxHQUFRO0FBQ0pDLGtCQUFNO0FBREYsUyxRQUdSQyxJLEdBQU8sRSxRQUdQQyxPLEdBQVU7QUFDTkMsaUJBRE0saUJBQ0NDLEtBREQsRUFDUUMsSUFEUixFQUNjQyxHQURkLEVBQ21CO0FBQ3JCQyx3QkFBUUMsR0FBUixDQUFZLFlBQVlKLEtBQVosR0FBb0IsV0FBcEIsR0FBa0NDLEtBQUtJLEtBQW5EO0FBQ0Esb0JBQUksS0FBS1QsSUFBTCxDQUFVSSxLQUFWLEVBQWlCTSxNQUFyQixFQUE2QjtBQUN6Qix5QkFBS1YsSUFBTCxDQUFVSSxLQUFWLEVBQWlCTSxNQUFqQixDQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS0MsT0FBbEM7QUFDSCxpQkFGRCxNQUVPO0FBQ0gseUJBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQlQsS0FBS0ksS0FBMUI7QUFDSDtBQUNKO0FBUkssUzs7Ozs7aUNBV0EsQ0FDVDs7OzZCQUVJVCxJLEVBQU07QUFDUCxpQkFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsaUJBQUtlLE1BQUw7QUFDSDs7OztFQXpCNkIsZUFBS0MsUzs7a0JBQWxCbEIsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbGlzdDoge31cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjbGljayAoaW5kZXgsIGl0ZW0sIGV2dCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmRleDogJyArIGluZGV4ICsgJ2NsaWNrZWQ6ICcgKyBpdGVtLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W2luZGV4XS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5hY3Rpb24uY2FsbCh0aGlzLiRwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3Quc2hvd1RvYXN0KGl0ZW0udGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQgKCkge1xuICAgICAgICB9XG5cbiAgICAgICAgbG9hZChsaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==