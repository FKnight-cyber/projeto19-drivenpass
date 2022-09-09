"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.register = void 0;
const pg_1 = __importDefault(require("../database/pg"));
async function register(email, password) {
    await pg_1.default.users.create({ data: { email, password } });
}
exports.register = register;
;
async function findUserByEmail(email) {
    return await pg_1.default.users.findUnique({ where: { email } });
}
exports.findUserByEmail = findUserByEmail;
;
