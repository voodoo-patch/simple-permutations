"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimplePermutation = /** @class */ (function () {
    function SimplePermutation() {
    }
    SimplePermutation.print = function (dict, prefix) {
        if (prefix === void 0) { prefix = ''; }
        if (dict.length === 0) {
            console.log(prefix);
            return;
        }
        for (var i = 0; i < dict.length; i++) {
            var current = dict[i];
            var partialDict = dict.map(function (x) { return x; });
            partialDict.splice(i, 1);
            this.print(partialDict, prefix + current.toString());
        }
    };
    return SimplePermutation;
}());
exports.SimplePermutation = SimplePermutation;
