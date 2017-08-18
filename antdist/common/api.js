'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _contact = require('./../mocks/contact.js');

var _contact2 = _interopRequireDefault(_contact);

var _history = require('./../mocks/history.js');

var _history2 = _interopRequireDefault(_history);

var _reply = require('./../mocks/reply.js');

var _reply2 = _interopRequireDefault(_reply);

var _global = require('./global.js');

var _global2 = _interopRequireDefault(_global);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getRandomReply: function getRandomReply(id) {
        var template = _reply2.default[id];
        if (!template) template = _reply2.default['other'];

        var index = Math.random() * template.length >> 0;

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(template[index]);
            });
        });
    },
    getContact: function getContact() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_contact2.default);
            });
        });
    },
    getUserInfo: function getUserInfo() {
        return new Promise(function (resolve, reject) {
            var cache = _global2.default.getUserInfo();
            if (cache) {
                resolve(cache);
            } else {
                _wepy2.default.getAuthCode().then(function (res) {
                    _wepy2.default.getAuthUserInfo().then(function (res) {
                        console.log('getuserinfo success');
                        console.log(res);
                        _global2.default.setUserInfo(res);
                        resolve(res);
                    }).catch(reject);
                }).catch(reject);
            }
        });
    },


    // select * from history h
    // left join contact c
    // on (h.from == c.id or h.to == c.id)
    // where h.from = :id or h.to = :id or :id = '';
    // order by h.time asc;
    getHistory: function getHistory(id) {
        var _this = this;

        var history = _wepy2.default.getStorageSync({key: '_wechat_history_'}).data || _history2.default;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var sorted = history.sort(function (a, b) {
                    return a.time - b.time;
                });
                if (!id) resolve(_this.leftJoin(sorted, _contact2.default));else {
                    resolve(_this.leftJoin(sorted.filter(function (v) {
                        return v.from === id || v.to === id;
                    }), _contact2.default));
                }
            });
        });
    },

    // select *, (select msg from history h2 where h2.from = c.id or h2.to = c.id order by time desc limit 1) as lastmsg
    // from history h
    // left join contact c
    // on (h.from == c.id or h.to == c.id)
    // where h.from = :id or h.to = :id or :id = '';
    // order by h.time desc;
    getMessageList: function getMessageList() {
        var _this2 = this;

        var history = _wepy2.default.getStorageSync({key: '_wechat_history_'}).data || _history2.default;
        return new Promise(function (resolve, reject) {
            var distince = [];
            var rst = [];
            var sorted = history.sort(function (a, b) {
                return b.time - a.time;
            });
            sorted.forEach(function (v) {
                if (v.from !== 'me' && distince.indexOf(v.from) === -1) {
                    distince.push(v.from);
                }
                if (v.to !== 'me' && distince.indexOf(v.to) === -1) {
                    distince.push(v.to);
                }
            });

            distince.forEach(function (v) {
                var pmsg = sorted.filter(function (msg) {
                    return msg.to === v || msg.from === v;
                });
                var lastmsg = pmsg.length ? pmsg[0].msg : '';

                rst.push({
                    id: v,
                    lastmsg: lastmsg
                });
            });

            setTimeout(function () {
                resolve(_this2.leftJoin(rst, _contact2.default));
            });
        });
    },
    leftJoin: function leftJoin(original, contacts) {

        var contactObj = _global2.default.getContact();
        var rst = [];

        original.forEach(function (v) {
            if (!v.id) {
                v.id = v.from !== 'me' ? v.from : v.to;
            }
            if (v.id) {
                if (v.id !== 'me') {
                    v.name = contactObj[v.id].name;
                    v.icon = (_wepy2.default.env === 'web' ? './mocks/users/' : '../mocks/users/') + contactObj[v.id].id + '.png';
                }
                rst.push(v);
            }
        });
        return rst;
    },
    sendMsg: function sendMsg(to, msg) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';

        return this.msg('me', to, msg, type);
    },
    replyMsg: function replyMsg(frm, msg) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';

        return this.msg(frm, 'me', msg, type);
    },
    msg: function msg(frm, to, _msg) {
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'text';

        var history = _wepy2.default.getStorageSync({key: '_wechat_history_'}).data || _history2.default;
        var msgObj = {
            to: to,
            msg: _msg,
            type: type,
            from: frm,
            time: +new Date()
        };

        history.push(msgObj);

        return new Promise(function (resolve, reject) {
            _wepy2.default.setStorage({ key: '_wechat_history_', data: history }).then(function () {
                resolve(msgObj);
            }).catch(reject);
        });
    },
    clearMsg: function clearMsg(id) {
        return _wepy2.default.clearStorage();
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21SZXBseSIsImlkIiwidGVtcGxhdGUiLCJpbmRleCIsIk1hdGgiLCJyYW5kb20iLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJnZXRDb250YWN0IiwiZ2V0VXNlckluZm8iLCJjYWNoZSIsImxvZ2luIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiY2F0Y2giLCJnZXRIaXN0b3J5IiwiaGlzdG9yeSIsImdldFN0b3JhZ2VTeW5jIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwidGltZSIsImxlZnRKb2luIiwiZmlsdGVyIiwidiIsImZyb20iLCJ0byIsImdldE1lc3NhZ2VMaXN0IiwiZGlzdGluY2UiLCJyc3QiLCJmb3JFYWNoIiwiaW5kZXhPZiIsInB1c2giLCJwbXNnIiwibXNnIiwibGFzdG1zZyIsIm9yaWdpbmFsIiwiY29udGFjdHMiLCJjb250YWN0T2JqIiwibmFtZSIsImljb24iLCJlbnYiLCJzZW5kTXNnIiwidHlwZSIsInJlcGx5TXNnIiwiZnJtIiwibXNnT2JqIiwiRGF0ZSIsInNldFN0b3JhZ2UiLCJrZXkiLCJkYXRhIiwiY2xlYXJNc2ciLCJjbGVhclN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYQSxrQkFEVywwQkFDS0MsRUFETCxFQUNTO0FBQ2hCLFlBQUlDLFdBQVcsZ0JBQVFELEVBQVIsQ0FBZjtBQUNBLFlBQUksQ0FBQ0MsUUFBTCxFQUNJQSxXQUFXLGdCQUFRLE9BQVIsQ0FBWDs7QUFFSixZQUFJQyxRQUFRQyxLQUFLQyxNQUFMLEtBQWdCSCxTQUFTSSxNQUF6QixJQUFtQyxDQUEvQzs7QUFFQSxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFD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LFVBQUwsQ0FBZ0IsRUFBQ0MsS0FBSyxrQkFBTixFQUEwQkMsTUFBTW5DLE9BQWhDLEVBQWhCLEVBQTBEUixJQUExRCxDQUErRCxZQUFNO0FBQ2pFUCx3QkFBUThDLE1BQVI7QUFDSCxhQUZELEVBRUdqQyxLQUZILENBRVNaLE1BRlQ7QUFHSCxTQUpNLENBQVA7QUFLSCxLQTdJVTtBQStJWGtELFlBL0lXLG9CQStJRDFELEVBL0lDLEVBK0lHO0FBQ1YsZUFBTyxlQUFLMkQsWUFBTCxFQUFQO0FBQ0g7QUFqSlUsQyIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbV9jb250YWN0cyBmcm9tICcuLi9tb2Nrcy9jb250YWN0JztcbmltcG9ydCBtX2hpc3RvcnkgZnJvbSAnLi4vbW9ja3MvaGlzdG9yeSc7XG5pbXBvcnQgbV9yZXBseSBmcm9tICcuLi9tb2Nrcy9yZXBseSc7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJy4vZ2xvYmFsJztcblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRSYW5kb21SZXBseSAoaWQpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gbV9yZXBseVtpZF07XG4gICAgICAgIGlmICghdGVtcGxhdGUpXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IG1fcmVwbHlbJ290aGVyJ107XG5cbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5yYW5kb20oKSAqIHRlbXBsYXRlLmxlbmd0aCA+PiAwO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRlbXBsYXRlW2luZGV4XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9LFxuICAgIGdldENvbnRhY3QgKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtX2NvbnRhY3RzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0VXNlckluZm8gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhY2hlID0gZ2xvYmFsLmdldFVzZXJJbmZvKCk7XG4gICAgICAgICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNhY2hlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VweS5sb2dpbigpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0dXNlcmluZm8gc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldFVzZXJJbmZvKHJlcy51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIHNlbGVjdCAqIGZyb20gaGlzdG9yeSBoXG4gICAgLy8gbGVmdCBqb2luIGNvbnRhY3QgY1xuICAgIC8vIG9uIChoLmZyb20gPT0gYy5pZCBvciBoLnRvID09IGMuaWQpXG4gICAgLy8gd2hlcmUgaC5mcm9tID0gOmlkIG9yIGgudG8gPSA6aWQgb3IgOmlkID0gJyc7XG4gICAgLy8gb3JkZXIgYnkgaC50aW1lIGFzYztcbiAgICBnZXRIaXN0b3J5IChpZCkge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ193ZWNoYXRfaGlzdG9yeV8nKSB8fCBtX2hpc3Rvcnk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkID0gaGlzdG9yeS5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuICAgICAgICAgICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5sZWZ0Sm9pbihzb3J0ZWQsIG1fY29udGFjdHMpKVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMubGVmdEpvaW4oc29ydGVkLmZpbHRlcigodikgPT4gdi5mcm9tID09PSBpZCB8fCB2LnRvID09PSBpZCksIG1fY29udGFjdHMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBzZWxlY3QgKiwgKHNlbGVjdCBtc2cgZnJvbSBoaXN0b3J5IGgyIHdoZXJlIGgyLmZyb20gPSBjLmlkIG9yIGgyLnRvID0gYy5pZCBvcmRlciBieSB0aW1lIGRlc2MgbGltaXQgMSkgYXMgbGFzdG1zZ1xuICAgIC8vIGZyb20gaGlzdG9yeSBoXG4gICAgLy8gbGVmdCBqb2luIGNvbnRhY3QgY1xuICAgIC8vIG9uIChoLmZyb20gPT0gYy5pZCBvciBoLnRvID09IGMuaWQpXG4gICAgLy8gd2hlcmUgaC5mcm9tID0gOmlkIG9yIGgudG8gPSA6aWQgb3IgOmlkID0gJyc7XG4gICAgLy8gb3JkZXIgYnkgaC50aW1lIGRlc2M7XG4gICAgZ2V0TWVzc2FnZUxpc3QgKCkge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ193ZWNoYXRfaGlzdG9yeV8nKSB8fCBtX2hpc3Rvcnk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlzdGluY2UgPSBbXTtcbiAgICAgICAgICAgIGxldCByc3QgPSBbXTtcbiAgICAgICAgICAgIGxldCBzb3J0ZWQgPSBoaXN0b3J5LnNvcnQoKGEsIGIpID0+IGIudGltZSAtIGEudGltZSk7XG4gICAgICAgICAgICBzb3J0ZWQuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2LmZyb20gIT09ICdtZScgJiYgZGlzdGluY2UuaW5kZXhPZih2LmZyb20pID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0aW5jZS5wdXNoKHYuZnJvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2LnRvICE9PSAnbWUnICYmIGRpc3RpbmNlLmluZGV4T2Yodi50bykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RpbmNlLnB1c2godi50byk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRpc3RpbmNlLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG1zZyA9IHNvcnRlZC5maWx0ZXIoKG1zZykgPT4gbXNnLnRvID09PSB2IHx8IG1zZy5mcm9tID09PSB2KTtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdG1zZyA9IHBtc2cubGVuZ3RoID8gcG1zZ1swXS5tc2cgOiAnJztcblxuICAgICAgICAgICAgICAgIHJzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHYsXG4gICAgICAgICAgICAgICAgICAgIGxhc3Rtc2c6IGxhc3Rtc2csXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmxlZnRKb2luKHJzdCwgbV9jb250YWN0cykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBsZWZ0Sm9pbihvcmlnaW5hbCwgY29udGFjdHMpIHtcblxuICAgICAgICBsZXQgY29udGFjdE9iaiA9IGdsb2JhbC5nZXRDb250YWN0KCk7XG4gICAgICAgIGxldCByc3QgPSBbXTtcblxuICAgICAgICBvcmlnaW5hbC5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXYuaWQpIHtcbiAgICAgICAgICAgICAgICB2LmlkID0gKHYuZnJvbSAhPT0gJ21lJykgPyB2LmZyb20gOiB2LnRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHYuaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodi5pZCAhPT0gJ21lJykge1xuICAgICAgICAgICAgICAgICAgICB2Lm5hbWUgPSBjb250YWN0T2JqW3YuaWRdLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHYuaWNvbiA9ICh3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9tb2Nrcy91c2Vycy8nIDogJy4uL21vY2tzL3VzZXJzLycpICsgY29udGFjdE9ialt2LmlkXS5pZCArICcucG5nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnN0LnB1c2godik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcnN0O1xuICAgIH0sXG5cbiAgICBzZW5kTXNnICh0bywgbXNnLCB0eXBlID0gJ3RleHQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1zZygnbWUnLCB0bywgbXNnLCB0eXBlKTtcbiAgICB9LFxuXG4gICAgcmVwbHlNc2cgKGZybSwgbXNnLCB0eXBlID0gJ3RleHQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1zZyhmcm0sICdtZScsIG1zZywgdHlwZSk7XG4gICAgfSxcblxuICAgIG1zZyAoZnJtLCB0bywgbXNnLCB0eXBlID0gJ3RleHQnKSB7XG4gICAgICAgIGxldCBoaXN0b3J5ID0gd2VweS5nZXRTdG9yYWdlU3luYygnX3dlY2hhdF9oaXN0b3J5XycpIHx8IG1faGlzdG9yeTtcbiAgICAgICAgbGV0IG1zZ09iaiA9IHtcbiAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgICAgIG1zZzogbXNnLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGZyb206IGZybSxcbiAgICAgICAgICAgIHRpbWU6ICtuZXcgRGF0ZSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaGlzdG9yeS5wdXNoKG1zZ09iaik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZSh7a2V5OiAnX3dlY2hhdF9oaXN0b3J5XycsIGRhdGE6IGhpc3Rvcnl9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1zZ09iaik7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2xlYXJNc2cgKGlkKSB7XG4gICAgICAgIHJldHVybiB3ZXB5LmNsZWFyU3RvcmFnZSgpO1xuICAgIH1cblxufVxuIl19