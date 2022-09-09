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
const wifiServices = __importStar(require("../services/wifiService"));
async function createWifi(req, res) {
    const { name, password, title } = req.body;
    const { userInfo } = res.locals;
    const wifi = {
        title,
        name,
        password,
        userId: userInfo.userId
    };
    await wifiServices.createWifi(wifi);
    return res.status(201).send("created");
}
exports.createWifi = createWifi;
;
async function getWifis(req, res) {
    const { userInfo } = res.locals;
    const wifis = await wifiServices.getWifis(userInfo.userId);
    return res.status(200).send(wifis);
}
exports.getWifis = getWifis;
async function getWifiById(req, res) {
    const { userInfo } = res.locals;
    const id = Number(req.params.id);
    const wifi = await wifiServices.getWifiById(userInfo.userId, id);
    return res.status(200).send(wifi);
}
exports.getWifiById = getWifiById;
async function deleteWifiById(req, res) {
    const { userInfo } = res.locals;
    const id = Number(req.params.id);
    await wifiServices.deleteWifiById(userInfo.userId, id);
    return res.status(200).send("wifi removed!");
}
exports.deleteWifiById = deleteWifiById;
