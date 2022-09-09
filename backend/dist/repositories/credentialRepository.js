"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCredentialById = exports.getMyCredentialById = exports.getMyCredentials = exports.findByTitle = exports.insert = void 0;
const pg_1 = __importDefault(require("../database/pg"));
async function insert(credential) {
    await pg_1.default.credentials.create({ data: credential });
}
exports.insert = insert;
async function findByTitle(title, userId) {
    return await pg_1.default.credentials.findFirst({ where: { title, userId } });
}
exports.findByTitle = findByTitle;
async function getMyCredentials(userId) {
    return await pg_1.default.credentials.findMany({ where: { userId } });
}
exports.getMyCredentials = getMyCredentials;
async function getMyCredentialById(id) {
    return await pg_1.default.credentials.findFirst({ where: { id } });
}
exports.getMyCredentialById = getMyCredentialById;
async function deleteCredentialById(id) {
    await pg_1.default.credentials.delete({ where: { id } });
}
exports.deleteCredentialById = deleteCredentialById;
