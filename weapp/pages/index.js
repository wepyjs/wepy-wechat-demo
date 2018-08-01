'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Message from '../components/message';
//import Discovery from '../components/discovery';
//import Contact from '../components/contact';
//import Me from '../components/me';
//import Tab from '../components/tab';

//import Toast from 'wepy-com-toast';

_wepy2.default.page({
    config: {
        'navigationBarTitleText': 'wepy - 微信',
        'navigationBarTextStyle': 'white',
        'navigationBarBackgroundColor': '#3b3a40'
    },

    data: {
        currentTab: 0
    },

    methods: {
        change: function change(index) {
            this.currentTab = index;
            console.log('tab click: ' + index);
        }
    },

    onShow: function onShow() {
        this.currentTab = 0;
        this.$invoke('message', 'loadMessage');
    },
    showToast: function showToast(name) {
        var promise = this.$invoke('toast', 'show', {
            title: '' + name,
            img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
        });

        promise.then(function (d) {
            console.log('toast done');
        });
    }
}, {info: {"components":{"tab":{"path":"../components/tab"},"message":{"path":"../components/message"},"discovery":{"path":"../components/discovery"},"contact":{"path":"../components/contact"},"me":{"path":"../components/me"}},"on":{"changetab":0}}, handlers: [{changetab: function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.change($event)
      })();
    
  }}] }); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//