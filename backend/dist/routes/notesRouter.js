"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteValidation_1 = __importDefault(require("../middlewares/noteValidation"));
const getUserData_1 = __importDefault(require("../middlewares/authValidation/getUserData"));
const notesController_1 = require("../controllers/notesController");
const notesRouter = (0, express_1.Router)();
notesRouter.post("/categories/notes/create", noteValidation_1.default, getUserData_1.default, notesController_1.createNote);
notesRouter.get("/notes", getUserData_1.default, notesController_1.getNotes);
notesRouter.get("/notes/:id", getUserData_1.default, notesController_1.getNoteById);
notesRouter.delete("/notes/delete/:id", getUserData_1.default, notesController_1.deleteNoteById);
exports.default = notesRouter;
