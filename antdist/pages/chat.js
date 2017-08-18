'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _input = require('./../components/input.js');

var _input2 = _interopRequireDefault(_input);

var _chartboard = require('./../components/chartboard.js');

var _chartboard2 = _interopRequireDefault(_chartboard);

var _global = require('./../common/global.js');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_wepy$page) {
    _inherits(Chat, _wepy$page);

    function Chat() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Chat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chat.__proto__ || Object.getPrototypeOf(Chat)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': 'wepy - 微信',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#3b3a40'
        }, _this.components = {
            myinput: _input2.default,
            chartboard: _chartboard2.default
        }, _this.data = {
            currentTab: 0
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Chat, [{
        key: 'changeTab',
        value: function changeTab(idx) {
            this.currentTab = +idx;
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            var contact = _global2.default.getContact(p.id);
            if (!contact) {
                this.$back();
                return;
            }
            _wepy2.default.setNavigationBar({ title: contact.name });

            this.$invoke('chartboard', 'loadMessage', p.id);
        }
    }]);

    return Chat;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chat , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiQ2hhdCIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJteWlucHV0IiwiY2hhcnRib2FyZCIsImRhdGEiLCJjdXJyZW50VGFiIiwibWV0aG9kcyIsImlkeCIsIiRhcHBseSIsInAiLCJjb250YWN0IiwiZ2V0Q29udGFjdCIsImlkIiwiJGJhY2siLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsTSxHQUFTO0FBQ0wsc0NBQTBCLFdBRHJCO0FBRUwsc0NBQTBCLE9BRnJCO0FBR0wsNENBQWdDO0FBSDNCLFMsUUFLVEMsVSxHQUFhO0FBQ1RDLG9DQURTO0FBRVRDO0FBRlMsUyxRQUtiQyxJLEdBQU87QUFDSEMsd0JBQVk7QUFEVCxTLFFBR1BDLE8sR0FBVSxFOzs7OztrQ0FHQ0MsRyxFQUFLO0FBQ1osaUJBQUtGLFVBQUwsR0FBa0IsQ0FBQ0UsR0FBbkI7QUFDQSxpQkFBS0MsTUFBTDtBQUNIOzs7K0JBQ09DLEMsRUFBRztBQUNQLGdCQUFJQyxVQUFVLGlCQUFPQyxVQUFQLENBQWtCRixFQUFFRyxFQUFwQixDQUFkO0FBQ0EsZ0JBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1YscUJBQUtHLEtBQUw7QUFDQTtBQUNIO0FBQ0RDLGVBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9OLFFBQVFPLElBQWhCLEVBQXpCOztBQUVBLGlCQUFLQyxPQUFMLENBQWEsWUFBYixFQUEyQixhQUEzQixFQUEwQ1QsRUFBRUcsRUFBNUM7QUFDSDs7OztFQTlCNkIsZUFBS08sSTs7a0JBQWxCcEIsSSIsImZpbGUiOiJjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgICBpbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dCc7XG4gICAgaW1wb3J0IENoYXJ0Ym9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydGJvYXJkJztcblxuICAgIGltcG9ydCBnbG9iYWwgZnJvbSAnLi4vY29tbW9uL2dsb2JhbCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnd2VweSAtIOW+ruS/oScsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjM2IzYTQwJ1xuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbXlpbnB1dDogSW5wdXQsXG4gICAgICAgICAgICBjaGFydGJvYXJkOiBDaGFydGJvYXJkXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGFuZ2VUYWIgKGlkeCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gK2lkeDtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICBsZXQgY29udGFjdCA9IGdsb2JhbC5nZXRDb250YWN0KHAuaWQpO1xuICAgICAgICAgICAgaWYgKCFjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYmFjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IGNvbnRhY3QubmFtZX0pO1xuXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2NoYXJ0Ym9hcmQnLCAnbG9hZE1lc3NhZ2UnLCBwLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==