'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _group = require('./group.js');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "group": { "v-bind:list.once": { "for": "list", "item": "item", "index": "index", "key": "index", "value": "item" } } }, _this.$events = {}, _this.components = {
            /* moment: List,
            action: List,
            drift: List,
            shopping: List, */
            group: _group2.default
        }, _this.data = {
            dMoment: [{ icon: _wepy2.default.env === 'web' ? './images/moment.png' : '../images/moment.png', title: '朋友圈' }],
            dShopping: [{ icon: _wepy2.default.env === 'web' ? './images/shopping.png' : '../images/shopping.png', title: '购物' }],
            dDrift: [{ icon: _wepy2.default.env === 'web' ? './images/drift.png' : '../images/drift.png', title: '漂流瓶' }],
            dAction: [{ icon: _wepy2.default.env === 'web' ? './images/scan.png' : '../images/scan.png', title: '扫一扫' }, { icon: _wepy2.default.env === 'web' ? './images/shake.png' : '../images/shake.png', title: '摇一摇' }],

            list: {
                dMoment: [{ icon: _wepy2.default.env === 'web' ? './images/moment.png' : '../images/moment.png', title: '朋友圈' }],
                dShopping: [{ icon: _wepy2.default.env === 'web' ? './images/shopping.png' : '../images/shopping.png', title: '购物' }],
                dDrift: [{ icon: _wepy2.default.env === 'web' ? './images/drift.png' : '../images/drift.png', title: '漂流瓶' }],
                dAction: [{ icon: _wepy2.default.env === 'web' ? './images/scan.png' : '../images/scan.png', title: '扫一扫' }, { icon: _wepy2.default.env === 'web' ? './images/shake.png' : '../images/shake.png', title: '摇一摇' }]
            }
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyeS5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJncm91cCIsImRhdGEiLCJkTW9tZW50IiwiaWNvbiIsImVudiIsInRpdGxlIiwiZFNob3BwaW5nIiwiZERyaWZ0IiwiZEFjdGlvbiIsImxpc3QiLCJtZXRob2RzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBRWxCQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsb0JBQW1CLEVBQUMsT0FBTSxNQUFQLEVBQWMsUUFBTyxNQUFyQixFQUE0QixTQUFRLE9BQXBDLEVBQTRDLE9BQU0sT0FBbEQsRUFBMEQsU0FBUSxNQUFsRSxFQUFwQixFQUFULEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGOzs7O0FBSUFDO0FBTEUsUyxRQU9OQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FBQyxFQUFDQyxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLHFCQUFyQixHQUE2QyxzQkFBcEQsRUFBNEVDLE9BQU8sS0FBbkYsRUFBRCxDQUROO0FBRUhDLHVCQUFXLENBQUMsRUFBQ0gsTUFBTSxlQUFLQyxHQUFMLEtBQWEsS0FBYixHQUFxQix1QkFBckIsR0FBK0Msd0JBQXRELEVBQWdGQyxPQUFPLElBQXZGLEVBQUQsQ0FGUjtBQUdIRSxvQkFBUSxDQUFDLEVBQUNKLE1BQU0sZUFBS0MsR0FBTCxLQUFhLEtBQWIsR0FBcUIsb0JBQXJCLEdBQTRDLHFCQUFuRCxFQUEwRUMsT0FBTyxLQUFqRixFQUFELENBSEw7QUFJSEcscUJBQVMsQ0FBQyxFQUFDTCxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG1CQUFyQixHQUEyQyxvQkFBbEQsRUFBd0VDLE9BQU8sS0FBL0UsRUFBRCxFQUF3RixFQUFDRixNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG9CQUFyQixHQUE0QyxxQkFBbkQsRUFBMEVDLE9BQU8sS0FBakYsRUFBeEYsQ0FKTjs7QUFNSEksa0JBQU07QUFDRlAseUJBQVMsQ0FBQyxFQUFDQyxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLHFCQUFyQixHQUE2QyxzQkFBcEQsRUFBNEVDLE9BQU8sS0FBbkYsRUFBRCxDQURQO0FBRUZDLDJCQUFXLENBQUMsRUFBQ0gsTUFBTSxlQUFLQyxHQUFMLEtBQWEsS0FBYixHQUFxQix1QkFBckIsR0FBK0Msd0JBQXRELEVBQWdGQyxPQUFPLElBQXZGLEVBQUQsQ0FGVDtBQUdGRSx3QkFBUSxDQUFDLEVBQUNKLE1BQU0sZUFBS0MsR0FBTCxLQUFhLEtBQWIsR0FBcUIsb0JBQXJCLEdBQTRDLHFCQUFuRCxFQUEwRUMsT0FBTyxLQUFqRixFQUFELENBSE47QUFJRkcseUJBQVMsQ0FBQyxFQUFDTCxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG1CQUFyQixHQUEyQyxvQkFBbEQsRUFBd0VDLE9BQU8sS0FBL0UsRUFBRCxFQUF3RixFQUFDRixNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG9CQUFyQixHQUE0QyxxQkFBbkQsRUFBMEVDLE9BQU8sS0FBakYsRUFBeEY7QUFKUDtBQU5ILFMsUUFhUEssTyxHQUFVLEU7Ozs7O2lDQUdBLENBQ1Q7Ozs7RUE1QmdDLGVBQUtDLFM7O2tCQUFyQmYsTyIsImZpbGUiOiJkaXNjb3ZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICAgICAkcHJvcHMgPSB7XCJncm91cFwiOntcInYtYmluZDpsaXN0Lm9uY2VcIjp7XCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwiLFwidmFsdWVcIjpcIml0ZW1cIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIC8qIG1vbWVudDogTGlzdCxcbiAgICAgICAgICAgIGFjdGlvbjogTGlzdCxcbiAgICAgICAgICAgIGRyaWZ0OiBMaXN0LFxuICAgICAgICAgICAgc2hvcHBpbmc6IExpc3QsICovXG4gICAgICAgICAgICBncm91cDogR3JvdXBcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGRNb21lbnQ6IFt7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL21vbWVudC5wbmcnIDogJy4uL2ltYWdlcy9tb21lbnQucG5nJywgdGl0bGU6ICfmnIvlj4vlnIgnfV0sXG4gICAgICAgICAgICBkU2hvcHBpbmc6IFt7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL3Nob3BwaW5nLnBuZycgOiAnLi4vaW1hZ2VzL3Nob3BwaW5nLnBuZycsIHRpdGxlOiAn6LSt54mpJ31dLFxuICAgICAgICAgICAgZERyaWZ0OiBbe2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9kcmlmdC5wbmcnIDogJy4uL2ltYWdlcy9kcmlmdC5wbmcnLCB0aXRsZTogJ+a8gua1geeTtid9XSxcbiAgICAgICAgICAgIGRBY3Rpb246IFt7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL3NjYW4ucG5nJyA6ICcuLi9pbWFnZXMvc2Nhbi5wbmcnLCB0aXRsZTogJ+aJq+S4gOaJqyd9LCB7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL3NoYWtlLnBuZycgOiAnLi4vaW1hZ2VzL3NoYWtlLnBuZycsIHRpdGxlOiAn5pGH5LiA5pGHJ31dLFxuXG4gICAgICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgICAgICAgZE1vbWVudDogW3tpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvbW9tZW50LnBuZycgOiAnLi4vaW1hZ2VzL21vbWVudC5wbmcnLCB0aXRsZTogJ+aci+WPi+WciCd9XSxcbiAgICAgICAgICAgICAgICBkU2hvcHBpbmc6IFt7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL3Nob3BwaW5nLnBuZycgOiAnLi4vaW1hZ2VzL3Nob3BwaW5nLnBuZycsIHRpdGxlOiAn6LSt54mpJ31dLFxuICAgICAgICAgICAgICAgIGREcmlmdDogW3tpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvZHJpZnQucG5nJyA6ICcuLi9pbWFnZXMvZHJpZnQucG5nJywgdGl0bGU6ICfmvILmtYHnk7YnfV0sXG4gICAgICAgICAgICAgICAgZEFjdGlvbjogW3tpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvc2Nhbi5wbmcnIDogJy4uL2ltYWdlcy9zY2FuLnBuZycsIHRpdGxlOiAn5omr5LiA5omrJ30sIHtpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvc2hha2UucG5nJyA6ICcuLi9pbWFnZXMvc2hha2UucG5nJywgdGl0bGU6ICfmkYfkuIDmkYcnfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQgKCkge1xuICAgICAgICB9XG4gICAgfVxuIl19