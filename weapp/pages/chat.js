"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _global = _interopRequireDefault(require('../common/global.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import Input from '../components/input';
//import Chartboard from '../components/chartboard';
_core["default"].page({
  props: ['itemid'],
  components: {},
  data: {
    cid: 0,
    currentTab: 0
  },
  methods: {},
  changeTab: function changeTab(idx) {
    this.currentTab = +idx;
    this.$apply();
  },
  attached: function attached(p) {
    var _this = this;

    setTimeout(function () {
      _this.cid = '10000';
    }, 5000);

    var contact = _global["default"].getContact(this.id);

    if (!contact) {
      this.$back();
      return;
    }

    wx.setNavigationBarTitle({
      title: contact.name
    }); //this.$invoke('chartboard', 'loadMessage', p.id);
  }
}, {info: {"components":{"chartboard":{"path":"../components/chartboard"},"myinput":{"path":"../components/input"}},"on":{}}, handlers: {}, models: {} });