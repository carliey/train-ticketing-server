"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
function exclude(user, keys) {
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        delete user[key];
    }
    return user;
}
exports.exclude = exclude;
//# sourceMappingURL=exclude.js.map