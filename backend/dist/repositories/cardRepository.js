"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCardById = exports.getMyCardById = exports.getMyCards = exports.findByTitle = exports.insert = void 0;
const pg_1 = __importDefault(require("../database/pg"));
async function insert(card) {
    await pg_1.default.cards.create({ data: card });
}
exports.insert = insert;
async function findByTitle(title, userId) {
    return await pg_1.default.cards.findFirst({ where: { title, userId } });
}
exports.findByTitle = findByTitle;
async function getMyCards(userId) {
    return await pg_1.default.cards.findMany({ where: { userId } });
}
exports.getMyCards = getMyCards;
async function getMyCardById(id) {
    return await pg_1.default.cards.findFirst({ where: { id } });
}
exports.getMyCardById = getMyCardById;
async function deleteCardById(id) {
    await pg_1.default.cards.delete({ where: { id } });
}
exports.deleteCardById = deleteCardById;
