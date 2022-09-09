"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cardSchema_1 = __importDefault(require("../schemas/cardSchema"));
function cardValidation(req, res, next) {
    const { error } = cardSchema_1.default.validate(req.body, { abortEarly: false });
    if (error)
        return res.status(422).send(error.details.map(detail => detail.message));
    next();
}
exports.default = cardValidation;
