'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_wepy$component) {
    _inherits(Item, _wepy$component);

    function Item() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Item);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            item: {},
            index: {}
        }, _this.methods = {
            click: function click(evt) {
                console.log('[clicked]GroupIndex:(' + this.$parent.$index + ') Index:(' + this.$index + ') Title:(' + this.item.title + ')');
                if (this.item.action) {
                    this.item.action.call(this.$parent);
                } else {
                    this.$root.showToast(this.item.title);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Item;
}(_wepy2.default.component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwiaXRlbSIsImluZGV4IiwibWV0aG9kcyIsImNsaWNrIiwiZXZ0IiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCIkaW5kZXgiLCJ0aXRsZSIsImFjdGlvbiIsImNhbGwiLCIkcm9vdCIsInNob3dUb2FzdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBRWpCQyxLLEdBQVE7QUFDSkMsa0JBQU0sRUFERjtBQUVKQyxtQkFBTztBQUZILFMsUUFLUkMsTyxHQUFVO0FBQ05DLGlCQURNLGlCQUNDQyxHQURELEVBQ007QUFDUkMsd0JBQVFDLEdBQVIsMkJBQW9DLEtBQUtDLE9BQUwsQ0FBYUMsTUFBakQsaUJBQW1FLEtBQUtBLE1BQXhFLGlCQUEwRixLQUFLUixJQUFMLENBQVVTLEtBQXBHO0FBQ0Esb0JBQUksS0FBS1QsSUFBTCxDQUFVVSxNQUFkLEVBQXNCO0FBQ2xCLHlCQUFLVixJQUFMLENBQVVVLE1BQVYsQ0FBaUJDLElBQWpCLENBQXNCLEtBQUtKLE9BQTNCO0FBQ0gsaUJBRkQsTUFFTztBQUNILHlCQUFLSyxLQUFMLENBQVdDLFNBQVgsQ0FBcUIsS0FBS2IsSUFBTCxDQUFVUyxLQUEvQjtBQUNIO0FBQ0o7QUFSSyxTOzs7O0VBUG9CLGVBQUtLLFM7O2tCQUFsQmhCLEkiLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGl0ZW06IHt9LFxuICAgICAgICAgICAgaW5kZXg6IHt9LFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNsaWNrIChldnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2NsaWNrZWRdR3JvdXBJbmRleDooJHt0aGlzLiRwYXJlbnQuJGluZGV4fSkgSW5kZXg6KCR7dGhpcy4kaW5kZXh9KSBUaXRsZTooJHt0aGlzLml0ZW0udGl0bGV9KWApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0uYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5hY3Rpb24uY2FsbCh0aGlzLiRwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3Quc2hvd1RvYXN0KHRoaXMuaXRlbS50aXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiJdfQ==