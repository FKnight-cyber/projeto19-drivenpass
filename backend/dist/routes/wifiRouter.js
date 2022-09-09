"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserData_1 = __importDefault(require("../middlewares/authValidation/getUserData"));
const wifiValidation_1 = __importDefault(require("../middlewares/wifiValidation"));
const wifiController_1 = require("../controllers/wifiController");
const wifiRouter = (0, express_1.Router)();
wifiRouter.post("/categories/wifis/create", wifiValidation_1.default, getUserData_1.default, wifiController_1.createWifi);
wifiRouter.get("/wifis", getUserData_1.default, wifiController_1.getWifis);
wifiRouter.get("/wifis/:id", getUserData_1.default, wifiController_1.getWifiById);
wifiRouter.delete("/wifis/delete/:id", getUserData_1.default, wifiController_1.deleteWifiById);
exports.default = wifiRouter;
