"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWifiById = exports.getWifiById = exports.getWifis = exports.createWifi = void 0;
const wifiMethods = __importStar(require("../repositories/wifiRepository"));
const errorHandler_1 = require("../middlewares/errorHandler");
const credentialUtils_1 = require("../utils/credentialUtils");
async function createWifi(wifi) {
    wifi.password = (0, credentialUtils_1.encrypt)(wifi.password);
    await wifiMethods.insert(wifi);
}
exports.createWifi = createWifi;
async function getWifis(userId) {
    const wifis = await wifiMethods.getMyWifis(userId);
    wifis.forEach(wifi => wifi.password = (0, credentialUtils_1.decrypt)(wifi.password));
    return wifis;
}
exports.getWifis = getWifis;
async function getWifiById(userId, id) {
    const wifi = await wifiMethods.getMyWifiById(id);
    if (!wifi)
        throw (0, errorHandler_1.checkError)(404, "There's no wifi registered with this ID");
    if (wifi.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This wifi doesn't belong to you!");
    wifi.password = (0, credentialUtils_1.decrypt)(wifi.password);
    return wifi;
}
exports.getWifiById = getWifiById;
async function deleteWifiById(userId, id) {
    const wifi = await wifiMethods.getMyWifiById(id);
    if (!wifi)
        throw (0, errorHandler_1.checkError)(404, "There's no wifi registered with this ID");
    if (wifi.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This wifi doesn't belong to you!");
    await wifiMethods.deleteWifiById(id);
}
exports.deleteWifiById = deleteWifiById;
