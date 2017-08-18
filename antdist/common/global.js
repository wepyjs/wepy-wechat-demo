'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _contact = require('./../mocks/contact.js');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getContact: function getContact(v) {
        if (this._contact) {
            return v ? this._contact[v] : this._contact;
        } else {
            var contactObj = {};
            _contact2.default.forEach(function (v) {
                contactObj[v.id] = v;
            });
            this._contact = contactObj;
            return this.getContact(v);
        }
    },
    setContact: function setContact(k, v) {
        if (v) {
            if (this._contact) this._contact[k] = v;else {
                this._contact = {};
                this._contact[k] = v;
            }
        } else {
            this._contact = k;
        }
    },
    getUserInfo: function getUserInfo() {
        return this._userInfo;
    },
    setUserInfo: function setUserInfo(v) {
        this._userInfo = v;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJnZXRDb250YWN0IiwidiIsIl9jb250YWN0IiwiY29udGFjdE9iaiIsImZvckVhY2giLCJpZCIsInNldENvbnRhY3QiLCJrIiwiZ2V0VXNlckluZm8iLCJfdXNlckluZm8iLCJzZXRVc2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYQSxjQURXLHNCQUNDQyxDQURELEVBQ0k7QUFDWCxZQUFJLEtBQUtDLFFBQVQsRUFBbUI7QUFDZixtQkFBT0QsSUFBSSxLQUFLQyxRQUFMLENBQWNELENBQWQsQ0FBSixHQUF1QixLQUFLQyxRQUFuQztBQUNILFNBRkQsTUFFTztBQUNILGdCQUFJQyxhQUFhLEVBQWpCO0FBQ0EsOEJBQVdDLE9BQVgsQ0FBbUIsVUFBQ0gsQ0FBRCxFQUFPO0FBQ3RCRSwyQkFBV0YsRUFBRUksRUFBYixJQUFtQkosQ0FBbkI7QUFDSCxhQUZEO0FBR0EsaUJBQUtDLFFBQUwsR0FBZ0JDLFVBQWhCO0FBQ0EsbUJBQU8sS0FBS0gsVUFBTCxDQUFnQkMsQ0FBaEIsQ0FBUDtBQUNIO0FBQ0osS0FaVTtBQWFYSyxjQWJXLHNCQWFDQyxDQWJELEVBYUlOLENBYkosRUFhTztBQUNkLFlBQUlBLENBQUosRUFBTztBQUNILGdCQUFJLEtBQUtDLFFBQVQsRUFDSSxLQUFLQSxRQUFMLENBQWNLLENBQWQsSUFBbUJOLENBQW5CLENBREosS0FFSztBQUNELHFCQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EscUJBQUtBLFFBQUwsQ0FBY0ssQ0FBZCxJQUFtQk4sQ0FBbkI7QUFDSDtBQUNKLFNBUEQsTUFPTztBQUNILGlCQUFLQyxRQUFMLEdBQWdCSyxDQUFoQjtBQUNIO0FBQ0osS0F4QlU7QUF5QlhDLGVBekJXLHlCQXlCSTtBQUNYLGVBQU8sS0FBS0MsU0FBWjtBQUNILEtBM0JVO0FBNEJYQyxlQTVCVyx1QkE0QkVULENBNUJGLEVBNEJLO0FBQ1osYUFBS1EsU0FBTCxHQUFpQlIsQ0FBakI7QUFDSDtBQTlCVSxDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtX2NvbnRhY3RzIGZyb20gJy4uL21vY2tzL2NvbnRhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Q29udGFjdCAodikge1xuICAgICAgICBpZiAodGhpcy5fY29udGFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHYgPyB0aGlzLl9jb250YWN0W3ZdIDogdGhpcy5fY29udGFjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb250YWN0T2JqID0ge307XG4gICAgICAgICAgICBtX2NvbnRhY3RzLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqW3YuaWRdID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY29udGFjdCA9IGNvbnRhY3RPYmo7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWN0KHYpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRDb250YWN0IChrLCB2KSB7XG4gICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGFjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250YWN0W2tdID0gdjtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhY3QgPSB7fVxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhY3Rba10gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY29udGFjdCA9IGs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFVzZXJJbmZvICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvO1xuICAgIH0sXG4gICAgc2V0VXNlckluZm8gKHYpIHtcbiAgICAgICAgdGhpcy5fdXNlckluZm8gPSB2O1xuICAgIH1cblxufSJdfQ==