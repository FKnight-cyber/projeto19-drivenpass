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
const cardServices = __importStar(require("../services/cardService"));
async function createCard(req, res) {
    let { number, name, securityCode, expirationDate, isVirtual, password, type, title } = req.body;
    const { userInfo } = res.locals;
    if (isVirtual === 'true') {
        isVirtual = true;
    }
    else {
        isVirtual = false;
    }
    const card = {
        number,
        name,
        securityCode,
        password,
        title,
        userId: userInfo.userId,
        expirationDate,
        isVirtual,
        type
    };
    await cardServices.createCard(card);
    return res.status(201).send("created");
}
exports.createCard = createCard;
;
async function getCards(req, res) {
    const { userInfo } = res.locals;
    const cards = await cardServices.getCards(userInfo.userId);
    return res.status(200).send(cards);
}
exports.getCards = getCards;
async function getCardById(req, res) {
    const { userInfo } = res.locals;
    const id = Number(req.params.id);
    const card = await cardServices.getCardById(userInfo.userId, id);
    return res.status(200).send(card);
}
exports.getCardById = getCardById;
async function deleteCardById(req, res) {
    const { userInfo } = res.locals;
    const id = Number(req.params.id);
    await cardServices.deleteCardById(userInfo.userId, id);
    return res.status(200).send("Card removed!");
}
exports.deleteCardById = deleteCardById;
