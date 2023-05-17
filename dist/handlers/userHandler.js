"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.updateProfile = exports.getProfile = exports.getUsers = void 0;
var exclude_1 = require("../helpers/exclude");
var auth_1 = require("../modules/auth");
var db_1 = __importDefault(require("../modules/db"));
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.user.findMany()];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({ data: response, message: "users fetched successfully" });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                res.json({ error: error_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, userWithoutPassword, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.user.findUnique({
                        where: {
                            id: req.user.id,
                        },
                    })];
            case 1:
                response = _a.sent();
                userWithoutPassword = (0, exclude_1.exclude)(response, ["password"]);
                console.log(response);
                res.json({
                    data: userWithoutPassword,
                    message: "profile fetched successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                res.json({ error: error_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProfile = getProfile;
var updateProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.user.update({
                        where: {
                            id: req.user.id,
                        },
                        data: {
                            name: req.body.name,
                            gender: req.body.gender,
                            phone: req.body.phone,
                            image: req.body.image,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({ message: "Profile updated successfully" });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                res.json({ error: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProfile = updateProfile;
var changePassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, isValid, response, _a, _b, error_4;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 5, , 6]);
                return [4 /*yield*/, db_1.default.user.findUnique({
                        where: {
                            id: req.user.id,
                        },
                    })];
            case 1:
                user = _e.sent();
                return [4 /*yield*/, (0, auth_1.comparePasswords)(req.body.old_password, user.password)];
            case 2:
                isValid = _e.sent();
                if (!isValid) {
                    res.status(401);
                    res.json({ message: "Old password incorrect" });
                    return [2 /*return*/];
                }
                _b = (_a = db_1.default.user).update;
                _c = {
                    where: {
                        id: user.id,
                    }
                };
                _d = {};
                return [4 /*yield*/, (0, auth_1.hashPassword)(req.body.new_password)];
            case 3: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.password = _e.sent(),
                        _d),
                        _c)])];
            case 4:
                response = _e.sent();
                console.log(response);
                res.json({ message: "password changed successfully" });
                return [3 /*break*/, 6];
            case 5:
                error_4 = _e.sent();
                console.log(error_4);
                res.json({ error: error_4 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.changePassword = changePassword;
//# sourceMappingURL=userHandler.js.map