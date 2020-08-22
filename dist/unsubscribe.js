(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(subs) {
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
    exports.default = default_1;
});
