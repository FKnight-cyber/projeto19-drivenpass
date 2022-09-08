import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserData";
import cardValidation from "../middlewares/cardValidation";
import { createCard, 
    deleteCardById, 
    getCardById, 
    getCards } from "../controllers/cardController";

const cardsRouter = Router();

cardsRouter.post("/categories/cards/create",cardValidation,getUserData,createCard);
cardsRouter.get("/cards",getUserData,getCards);
cardsRouter.get("/cards/:id",getUserData,getCardById);
cardsRouter.delete("/cards/delete/:id",getUserData,deleteCardById);

export default cardsRouter;