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
exports.deleteNoteById = exports.getNoteById = exports.getNotes = exports.createNote = void 0;
const noteMethods = __importStar(require("../repositories/noteRepository"));
const errorHandler_1 = require("../middlewares/errorHandler");
async function createNote(note) {
    const checknote = await noteMethods.findByTitle(note.title, note.userId);
    if (checknote)
        throw (0, errorHandler_1.checkError)(401, "You already registered a note with this title!");
    await noteMethods.insert(note);
}
exports.createNote = createNote;
async function getNotes(userId) {
    const notes = await noteMethods.getMyNotes(userId);
    return notes;
}
exports.getNotes = getNotes;
async function getNoteById(userId, id) {
    const note = await noteMethods.getMyNoteById(id);
    if (!note)
        throw (0, errorHandler_1.checkError)(404, "There's no note registered with this ID");
    if (note.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This note doesn't belong to you!");
    return note;
}
exports.getNoteById = getNoteById;
async function deleteNoteById(userId, id) {
    const note = await noteMethods.getMyNoteById(id);
    if (!note)
        throw (0, errorHandler_1.checkError)(404, "There's no note registered with this ID");
    if (note.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This note doesn't belong to you!");
    await noteMethods.deleteNoteById(id);
}
exports.deleteNoteById = deleteNoteById;
