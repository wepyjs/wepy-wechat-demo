'use strict';

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('../common/global.js')

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_wepy2.default.page({
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
        var contact = _global2.default.getContact(this.id);
        if (!contact) {
            this.$back();
            return;
        }

        wx.setNavigationBarTitle({ title: contact.name });

        //this.$invoke('chartboard', 'loadMessage', p.id);
    }
}, {info: {"components":{"chartboard":{"path":"../components/chartboard"},"myinput":{"path":"../components/input"}},"on":{}}, handlers: [] });

//import Input from '../components/input';
//import Chartboard from '../components/chartboard';