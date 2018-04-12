(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "marked"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var marked = require("marked");
    exports.default = (function (src, options, callback) {
        var result = marked(src, options, callback);
        return result;
    });
});
//# sourceMappingURL=index.js.map