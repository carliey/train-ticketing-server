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
exports.deleteSchedule = exports.removeSeatFromSchedule = exports.addSeatToSchedule = exports.deactivateSchedule = exports.activateSchedule = exports.updateSchedule = exports.createSchedule = exports.getSchedulesByDate = exports.getAvailableSchedules = exports.getAllSchedules = void 0;
var db_1 = __importDefault(require("../modules/db"));
var getAllSchedules = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.findMany()];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedules fetched successfully",
                });
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
exports.getAllSchedules = getAllSchedules;
var getAvailableSchedules = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.findMany({
                        where: {
                            is_open: true,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedules fetched successfully",
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
exports.getAvailableSchedules = getAvailableSchedules;
var getSchedulesByDate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.findMany({
                        where: {
                            departure_date: req.body.departure_date,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedules fetched successfully",
                });
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
exports.getSchedulesByDate = getSchedulesByDate;
var createSchedule = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.create({
                        data: {
                            departure_date: req.body,
                            arrival_date: req.body.arrival_date || undefined,
                            depature_time: req.body.depature_time,
                            arrival_time: req.body.arrival_time,
                            is_open: true,
                            depature_station_id: req.body.depature_station_id,
                            arrival_station_id: req.body.arrival_station_id,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedules created successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log(error_4);
                res.json({ error: error_4 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createSchedule = createSchedule;
var updateSchedule = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.update({
                        where: {
                            id: req.params.id,
                        },
                        data: {
                            departure_date: req.body,
                            arrival_date: req.body.arrival_date || undefined,
                            depature_time: req.body.depature_time,
                            arrival_time: req.body.arrival_time,
                            is_open: true,
                            depature_station_id: req.body.depature_station_id,
                            arrival_station_id: req.body.arrival_station_id,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedules updated successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.log(error_5);
                res.json({ error: error_5 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateSchedule = updateSchedule;
var activateSchedule = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.update({
                        where: {
                            id: req.params.id,
                        },
                        data: {
                            is_open: true,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedules updated successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.log(error_6);
                res.json({ error: error_6 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.activateSchedule = activateSchedule;
var deactivateSchedule = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.update({
                        where: {
                            id: req.params.id,
                        },
                        data: {
                            is_open: false,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedules updated successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.log(error_7);
                res.json({ error: error_7 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deactivateSchedule = deactivateSchedule;
var addSeatToSchedule = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.update({
                        where: {
                            id: req.params.id,
                        },
                        data: {
                            seats: {
                                connect: {
                                    id: req.body.seat_id,
                                },
                            },
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "seat added schedule successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                console.log(error_8);
                res.json({ error: error_8 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addSeatToSchedule = addSeatToSchedule;
var removeSeatFromSchedule = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.update({
                        where: {
                            id: req.params.id,
                        },
                        data: {
                            seats: {
                                disconnect: {
                                    id: req.body.seat_id,
                                },
                            },
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "seat added schedule successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                console.log(error_9);
                res.json({ error: error_9 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.removeSeatFromSchedule = removeSeatFromSchedule;
var deleteSchedule = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.schedule.delete({
                        where: {
                            id: req.params.id,
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                res.json({
                    data: response,
                    message: "schedule deleted successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                console.log(error_10);
                res.json({ error: error_10 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteSchedule = deleteSchedule;
//# sourceMappingURL=scheduleHandler.js.map