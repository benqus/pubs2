define("publish", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(subs) {
        return function publish(_a, payload) {
            var o = _a[0], a = _a[1];
            if (!subs.has(o))
                return;
            var actions = subs.get(o);
            if (!actions.get(a))
                return;
            var subscriptions = actions.get(a);
            if (subscriptions)
                subscriptions.forEach(function (fn) { return fn(o, a, payload); });
        };
    }
    exports.default = default_1;
});
define("subscribe", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_2(subs) {
        return function subscribe(_a, fn) {
            var o = _a[0], a = _a[1];
            // create object-space
            if (!subs.has(o))
                subs.set(o, new Map());
            var context = subs.get(o);
            if (!a)
                throw new Error('Action must be provided!');
            // crate action-space
            if (!context.has(a))
                context.set(a, new Set());
            context.get(a).add(fn);
            return fn;
        };
    }
    exports.default = default_2;
});
define("unsubscribe", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_3(subs) {
        function _removeContext(o) {
            var actions = subs.get(o);
            actions.forEach(function (set) { return set.clear(); });
            actions.clear();
            subs.delete(o);
        }
        return function unsubscribe(_a, fn) {
            var o = _a[0], a = _a[1];
            if (!subs.has(o))
                return;
            // remove all object-space subscriptions
            if (!a)
                _removeContext(o);
            // remove action-space subscriptions
            var actions = subs.get(o);
            var subscriptions = actions.get(a);
            // remove subscription from subscriptions
            if (subscriptions)
                subscriptions.delete(fn);
            // clean up action-space
            if (subscriptions.size === 0)
                actions.delete(a);
            // clean up object-space
            if (actions.size === 0)
                subs.delete(o);
        };
    }
    exports.default = default_3;
});
/// <reference path="./types.d.ts" />
define("index", ["require", "exports", "publish", "subscribe", "unsubscribe"], function (require, exports, publish_1, subscribe_1, unsubscribe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_4() {
        var subs = new Map();
        return {
            subscribe: subscribe_1.default(subs),
            unsubscribe: unsubscribe_1.default(subs),
            publish: publish_1.default(subs),
        };
    }
    exports.default = default_4;
});
