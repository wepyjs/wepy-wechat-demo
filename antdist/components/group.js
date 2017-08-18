'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _item = require('./item.js');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
    _inherits(Group, _wepy$component);

    function Group() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Group);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: {}
        }, _this.$props = { "item": { "v-bind:item.once": { "for": "list", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:index.once": { "for": "list", "item": "item", "index": "index", "key": "key", "value": "index" } } }, _this.$events = {}, _this.components = {
            item: _item2.default
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJsaXN0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpdGVtIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDSTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsSyxHQUFRO0FBQ0pDLGtCQUFNO0FBREYsUyxRQUlUQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsb0JBQW1CLEVBQUMsT0FBTSxNQUFQLEVBQWMsUUFBTyxNQUFyQixFQUE0QixTQUFRLE9BQXBDLEVBQTRDLE9BQU0sS0FBbEQsRUFBd0QsU0FBUSxPQUFoRSxFQUFwQixFQUE2RixxQkFBb0IsRUFBQyxPQUFNLE1BQVAsRUFBYyxRQUFPLE1BQXJCLEVBQTRCLFNBQVEsT0FBcEMsRUFBNEMsT0FBTSxLQUFsRCxFQUF3RCxTQUFRLE9BQWhFLEVBQWpILEVBQVIsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUzs7OztFQVJ5QixlQUFLQyxTOztrQkFBbkJQLEsiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGxpc3Q6IHt9XG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcIml0ZW1cIjp7XCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1wiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXgub25jZVwiOntcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBpdGVtOiBJdGVtXG4gICAgICAgIH07XG5cbiAgICB9XG4iXX0=