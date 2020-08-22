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
