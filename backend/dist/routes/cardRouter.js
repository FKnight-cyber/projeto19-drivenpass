"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserData_1 = __importDefault(require("../middlewares/authValidation/getUserData"));
const cardValidation_1 = __importDefault(require("../middlewares/cardValidation"));
const cardController_1 = require("../controllers/cardController");
const cardsRouter = (0, express_1.Router)();
cardsRouter.post("/categories/cards/create", cardValidation_1.default, getUserData_1.default, cardController_1.createCard);
cardsRouter.get("/cards", getUserData_1.default, cardController_1.getCards);
cardsRouter.get("/cards/:id", getUserData_1.default, cardController_1.getCardById);
cardsRouter.delete("/cards/delete/:id", getUserData_1.default, cardController_1.deleteCardById);
exports.default = cardsRouter;
