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
exports.deleteCardById = exports.getCardById = exports.getCards = exports.createCard = void 0;
const cardMethods = __importStar(require("../repositories/cardRepository"));
const errorHandler_1 = require("../middlewares/errorHandler");
const credentialUtils_1 = require("../utils/credentialUtils");
async function createCard(card) {
    const checkCard = await cardMethods.findByTitle(card.title, card.userId);
    if (checkCard)
        throw (0, errorHandler_1.checkError)(401, "You already registered a card with this title!");
    card.password = (0, credentialUtils_1.encrypt)(card.password);
    card.securityCode = (0, credentialUtils_1.encrypt)(card.securityCode);
    await cardMethods.insert(card).catch(Error => {
        throw (0, errorHandler_1.checkError)(500, "Failed to store in database");
    });
}
exports.createCard = createCard;
async function getCards(userId) {
    const cards = await cardMethods.getMyCards(userId);
    cards.forEach(card => {
        card.password = (0, credentialUtils_1.decrypt)(card.password);
        card.securityCode = (0, credentialUtils_1.decrypt)(card.securityCode);
    });
    return cards;
}
exports.getCards = getCards;
async function getCardById(userId, id) {
    const card = await cardMethods.getMyCardById(id);
    if (!card)
        throw (0, errorHandler_1.checkError)(404, "There's no card registered with this ID");
    if (card.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This card doesn't belong to you!");
    card.password = (0, credentialUtils_1.decrypt)(card.password);
    card.securityCode = (0, credentialUtils_1.decrypt)(card.securityCode);
    return card;
}
exports.getCardById = getCardById;
async function deleteCardById(userId, id) {
    const card = await cardMethods.getMyCardById(id);
    if (!card)
        throw (0, errorHandler_1.checkError)(404, "There's no card registered with this ID");
    if (card.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This card doesn't belong to you!");
    await cardMethods.deleteCardById(id);
}
exports.deleteCardById = deleteCardById;
