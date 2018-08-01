'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('../vendor.js')(3)

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = [{ id: 'caixia', name: '彩霞' }, { id: 'erkang', name: '尔康' }, { id: 'ertai', name: '尔泰' }, { id: 'fuheng', name: '傅恒' }, { id: 'fujin', name: '福晋' }, { id: 'fulun', name: '福伦' }, { id: 'huanghou', name: '皇后' }, { id: 'huangshang', name: '皇上' }, { id: 'jingsuo', name: '金锁' }, { id: 'laofuoye', name: '老佛爷' }, { id: 'linfei', name: '令妃' }, { id: 'liuhong', name: '柳红' }, { id: 'liuqing', name: '柳青' }, { id: 'mingyue', name: '明月' }, { id: 'qinger', name: '晴儿' }, { id: 'rongmeme', name: '蓉嚒嚒' }, { id: 'saiya', name: '塞雅' }, { id: 'wuage', name: '五阿哥' }, { id: 'xiangfei', name: '香妃' }, { id: 'xiaodengzi', name: '小邓子' }, { id: 'xiaojian', name: '萧剑' }, { id: 'xiaoyanzi', name: '小燕子' }, { id: 'xiaozhuozi', name: '小卓子' }, { id: 'ziwei', name: '紫薇' }, { id: 'mahuateng', name: '马化腾' }, { id: 'mayun', name: '马云' }, { id: 'dinglei', name: '丁磊' }, { id: 'liyanhong', name: '李彦宏' }, { id: 'liuqiangdong', name: '刘强东' }, { id: 'liuchuanzhi', name: '刘传志' }];

users = users.sort(function (a, b) {
    return a.id.charCodeAt(0) - b.id.charCodeAt(0);
});

var table = users.map(function (v) {
    return {
        name: v.name,
        id: v.id,
        icon: _wepy2.default.env === 'web' ? './mocks/users/' + v.id + '.png' : '../mocks/users/' + v.id + '.png'
    };
});
exports.default = table;