"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWifiById = exports.getMyWifiById = exports.getMyWifis = exports.insert = void 0;
const pg_1 = __importDefault(require("../database/pg"));
async function insert(wifi) {
    await pg_1.default.wifis.create({ data: wifi });
}
exports.insert = insert;
async function getMyWifis(userId) {
    return await pg_1.default.wifis.findMany({ where: { userId } });
}
exports.getMyWifis = getMyWifis;
async function getMyWifiById(id) {
    return await pg_1.default.wifis.findFirst({ where: { id } });
}
exports.getMyWifiById = getMyWifiById;
async function deleteWifiById(id) {
    await pg_1.default.wifis.delete({ where: { id } });
}
exports.deleteWifiById = deleteWifiById;
