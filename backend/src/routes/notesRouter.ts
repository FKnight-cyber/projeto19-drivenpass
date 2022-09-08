import { Router } from "express";
import noteValidation from "../middlewares/noteValidation";
import getUserData from "../middlewares/authValidation/getUserData";
import { createNote, 
    deleteNoteById, 
    getNoteById, 
    getNotes } from "../controllers/notesController";

const notesRouter = Router();

notesRouter.post("/categories/notes/create",noteValidation,getUserData,createNote);
notesRouter.get("/notes",getUserData,getNotes);
notesRouter.get("/notes/:id",getUserData,getNoteById);
notesRouter.delete("/notes/delete/:id",getUserData,deleteNoteById);

export default notesRouter;