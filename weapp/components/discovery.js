"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Group from './group';
_core["default"].component({
  components: {
    /* moment: List,
    action: List,
    drift: List,
    shopping: List, */
    // group: Group
  },
  data: {
    dMoment: [{
      icon: _core["default"].env === 'web' ? './images/moment.png' : '../images/moment.png',
      title: '朋友圈'
    }],
    dShopping: [{
      icon: _core["default"].env === 'web' ? './images/shopping.png' : '../images/shopping.png',
      title: '购物'
    }],
    dDrift: [{
      icon: _core["default"].env === 'web' ? './images/drift.png' : '../images/drift.png',
      title: '漂流瓶'
    }],
    dAction: [{
      icon: _core["default"].env === 'web' ? './images/scan.png' : '../images/scan.png',
      title: '扫一扫'
    }, {
      icon: _core["default"].env === 'web' ? './images/shake.png' : '../images/shake.png',
      title: '摇一摇'
    }],
    list: {
      dMoment: [{
        icon: _core["default"].env === 'web' ? './images/moment.png' : '../images/moment.png',
        title: '朋友圈'
      }],
      dShopping: [{
        icon: _core["default"].env === 'web' ? './images/shopping.png' : '../images/shopping.png',
        title: '购物'
      }],
      dDrift: [{
        icon: _core["default"].env === 'web' ? './images/drift.png' : '../images/drift.png',
        title: '漂流瓶'
      }],
      dAction: [{
        icon: _core["default"].env === 'web' ? './images/scan.png' : '../images/scan.png',
        title: '扫一扫'
      }, {
        icon: _core["default"].env === 'web' ? './images/shake.png' : '../images/shake.png',
        title: '摇一摇'
      }]
    }
  },
  methods: {},
  onLoad: function onLoad() {}
}, {info: {"components":{"group":{"path":"group"}},"on":{}}, handlers: {}, models: {} });