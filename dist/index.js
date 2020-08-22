/// <reference path="./types.d.ts" />
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./publish", "./subscribe", "./unsubscribe"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var publish_1 = require("./publish");
    var subscribe_1 = require("./subscribe");
    var unsubscribe_1 = require("./unsubscribe");
    function default_1() {
        var subs = new Map();
        return {
            subscribe: subscribe_1.default(subs),
            unsubscribe: unsubscribe_1.default(subs),
            publish: publish_1.default(subs),
        };
    }
    exports.default = default_1;
});
