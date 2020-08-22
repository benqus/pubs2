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
    exports.default = default_1;
});
