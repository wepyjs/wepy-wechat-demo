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

var Input = function (_wepy$component) {
    _inherits(Input, _wepy$component);

    function Input() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Input);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            focusFlag: false,
            readyToSend: ''
        }, _this.methods = {
            send: function send(evt) {
                if (this.readyToSend) {
                    this.$invoke('../chartboard', 'sendMessage', this.readyToSend);
                }
            },
            input: function input(evt) {
                this.readyToSend = evt.detail.value;
            },
            focus: function focus(evt) {
                this.focusFlag = true;
                this.$invoke('../chartboard', 'fixPosition', this.focusFlag);
            },
            blur: function blur(evt) {
                this.focusFlag = false;
                this.$invoke('../chartboard', 'fixPosition', this.focusFlag);
            },
            clear: function clear() {
                this.readyToSend = '';
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Input, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Input;
}(_wepy2.default.component);

exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwiZGF0YSIsImZvY3VzRmxhZyIsInJlYWR5VG9TZW5kIiwibWV0aG9kcyIsInNlbmQiLCJldnQiLCIkaW52b2tlIiwiaW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsImZvY3VzIiwiYmx1ciIsImNsZWFyIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsSSxHQUFPO0FBQ0hDLHVCQUFXLEtBRFI7QUFFSEMseUJBQWE7QUFGVixTLFFBS1BDLE8sR0FBVTtBQUNOQyxnQkFETSxnQkFDQUMsR0FEQSxFQUNLO0FBQ1Asb0JBQUksS0FBS0gsV0FBVCxFQUFzQjtBQUNsQix5QkFBS0ksT0FBTCxDQUFhLGVBQWIsRUFBOEIsYUFBOUIsRUFBNkMsS0FBS0osV0FBbEQ7QUFDSDtBQUNKLGFBTEs7QUFNTkssaUJBTk0saUJBTUNGLEdBTkQsRUFNTTtBQUNSLHFCQUFLSCxXQUFMLEdBQW1CRyxJQUFJRyxNQUFKLENBQVdDLEtBQTlCO0FBQ0gsYUFSSztBQVNOQyxpQkFUTSxpQkFTQ0wsR0FURCxFQVNNO0FBQ1IscUJBQUtKLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxxQkFBS0ssT0FBTCxDQUFhLGVBQWIsRUFBOEIsYUFBOUIsRUFBNkMsS0FBS0wsU0FBbEQ7QUFDSCxhQVpLO0FBYU5VLGdCQWJNLGdCQWFBTixHQWJBLEVBYUs7QUFDUCxxQkFBS0osU0FBTCxHQUFpQixLQUFqQjtBQUNBLHFCQUFLSyxPQUFMLENBQWEsZUFBYixFQUE4QixhQUE5QixFQUE2QyxLQUFLTCxTQUFsRDtBQUNILGFBaEJLO0FBaUJOVyxpQkFqQk0sbUJBaUJHO0FBQ0wscUJBQUtWLFdBQUwsR0FBbUIsRUFBbkI7QUFDSDtBQW5CSyxTOzs7OztpQ0FzQkEsQ0FDVDs7OztFQTlCOEIsZUFBS1csUzs7a0JBQW5CZCxLIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgZm9jdXNGbGFnOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWR5VG9TZW5kOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZW5kIChldnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVRvU2VuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJy4uL2NoYXJ0Ym9hcmQnLCAnc2VuZE1lc3NhZ2UnLCB0aGlzLnJlYWR5VG9TZW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXQgKGV2dCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb1NlbmQgPSBldnQuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzIChldnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCcuLi9jaGFydGJvYXJkJywgJ2ZpeFBvc2l0aW9uJywgdGhpcy5mb2N1c0ZsYWcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsdXIgKGV2dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCcuLi9jaGFydGJvYXJkJywgJ2ZpeFBvc2l0aW9uJywgdGhpcy5mb2N1c0ZsYWcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5VG9TZW5kID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==