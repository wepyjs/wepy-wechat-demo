'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _message = require('./../components/message.js');

var _message2 = _interopRequireDefault(_message);

var _discovery = require('./../components/discovery.js');

var _discovery2 = _interopRequireDefault(_discovery);

var _contact = require('./../components/contact.js');

var _contact2 = _interopRequireDefault(_contact);

var _me = require('./../components/me.js');

var _me2 = _interopRequireDefault(_me);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': 'wepy - 微信',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#3b3a40'
        }, _this.$props = { "tab": { "v-bind:active.sync": "currentTab" } }, _this.$events = {}, _this.components = {
            message: _message2.default,
            discovery: _discovery2.default,
            me: _me2.default,
            contact: _contact2.default,
            tab: _tab2.default,
            toast: _wepyComToast2.default
        }, _this.data = {
            currentTab: 0
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShow',
        value: function onShow() {
            this.currentTab = 0;
            this.$invoke('message', 'loadMessage');
        }
    }, {
        key: 'showToast',
        value: function showToast(name) {
            var promise = this.$invoke('toast', 'show', {
                title: '' + name,
                img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
            });

            promise.then(function (d) {
                console.log('toast done');
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtZXNzYWdlIiwiZGlzY292ZXJ5IiwibWUiLCJjb250YWN0IiwidGFiIiwidG9hc3QiLCJkYXRhIiwiY3VycmVudFRhYiIsIm1ldGhvZHMiLCIkaW52b2tlIiwibmFtZSIsInByb21pc2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTCxzQ0FBMEIsV0FEckI7QUFFTCxzQ0FBMEIsT0FGckI7QUFHTCw0Q0FBZ0M7QUFIM0IsUyxRQU1WQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsc0JBQXFCLFlBQXRCLEVBQVAsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLHNDQURFO0FBRUZDLDBDQUZFO0FBR0ZDLDRCQUhFO0FBSUZDLHNDQUpFO0FBS0ZDLDhCQUxFO0FBTUZDO0FBTkUsUyxRQVNOQyxJLEdBQU87QUFDSEMsd0JBQVk7QUFEVCxTLFFBSVBDLE8sR0FBVSxFOzs7OztpQ0FHRDtBQUNMLGlCQUFLRCxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsaUJBQUtFLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLGFBQXhCO0FBQ0g7OztrQ0FFU0MsSSxFQUFNO0FBQ1osZ0JBQUlDLFVBQVUsS0FBS0YsT0FBTCxDQUFhLE9BQWIsRUFBc0IsTUFBdEIsRUFBOEI7QUFDeENHLDRCQUFVRixJQUQ4QjtBQUV4Q0cscUJBQUs7QUFGbUMsYUFBOUIsQ0FBZDs7QUFLQUYsb0JBQVFHLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDaEJDLHdCQUFRQyxHQUFSLENBQVksWUFBWjtBQUNILGFBRkQ7QUFHSDs7OztFQXZDOEIsZUFBS0MsSTs7a0JBQW5CdkIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvbWVzc2FnZSc7XG4gICAgaW1wb3J0IERpc2NvdmVyeSBmcm9tICcuLi9jb21wb25lbnRzL2Rpc2NvdmVyeSc7XG4gICAgaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcbiAgICBpbXBvcnQgTWUgZnJvbSAnLi4vY29tcG9uZW50cy9tZSc7XG4gICAgaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL3RhYic7XG5cbiAgICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICd3ZXB5IC0g5b6u5L+hJyxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ3doaXRlJyxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyMzYjNhNDAnXG4gICAgICAgIH07XG5cbiAgICAgICAkcHJvcHMgPSB7XCJ0YWJcIjp7XCJ2LWJpbmQ6YWN0aXZlLnN5bmNcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogTWVzc2FnZSxcbiAgICAgICAgICAgIGRpc2NvdmVyeTogRGlzY292ZXJ5LFxuICAgICAgICAgICAgbWU6IE1lLFxuICAgICAgICAgICAgY29udGFjdDogQ29udGFjdCxcbiAgICAgICAgICAgIHRhYjogVGFiLFxuICAgICAgICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9O1xuXG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IDA7XG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ21lc3NhZ2UnLCAnbG9hZE1lc3NhZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dUb2FzdChuYW1lKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7bmFtZX1gLFxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZG9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=