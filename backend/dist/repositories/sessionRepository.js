"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSession = exports.newSession = void 0;
const pg_1 = __importDefault(require("../database/pg"));
async function newSession(data) {
    await pg_1.default.sessions.create({ data: data });
}
exports.newSession = newSession;
;
async function findSession(token) {
    return await pg_1.default.sessions.findFirst({ where: { token } });
}
exports.findSession = findSession;
