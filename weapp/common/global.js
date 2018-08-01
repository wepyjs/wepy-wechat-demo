'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _contact = require('../mocks/contact.js')

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