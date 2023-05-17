"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userHandler_1 = require("./handlers/userHandler");
var router = (0, express_1.Router)();
//-------user Routes
router.get("/users", userHandler_1.getUsers);
router.get("/profile", userHandler_1.getProfile);
router.put("/profile/update", userHandler_1.updateProfile);
router.put("/profile/update-password", userHandler_1.changePassword);
exports.default = router;
//# sourceMappingURL=router.js.map