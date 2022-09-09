"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNoteById = exports.getMyNoteById = exports.getMyNotes = exports.findByTitle = exports.insert = void 0;
const pg_1 = __importDefault(require("../database/pg"));
async function insert(note) {
    await pg_1.default.safenotes.create({ data: note });
}
exports.insert = insert;
async function findByTitle(title, userId) {
    return await pg_1.default.safenotes.findFirst({ where: { title, userId } });
}
exports.findByTitle = findByTitle;
async function getMyNotes(userId) {
    return await pg_1.default.safenotes.findMany({ where: { userId } });
}
exports.getMyNotes = getMyNotes;
async function getMyNoteById(id) {
    return await pg_1.default.safenotes.findFirst({ where: { id } });
}
exports.getMyNoteById = getMyNoteById;
async function deleteNoteById(id) {
    await pg_1.default.safenotes.delete({ where: { id } });
}
exports.deleteNoteById = deleteNoteById;
