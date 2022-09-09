"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const cardSchema = joi_1.default.object({
    number: joi_1.default.string().max(16).required(),
    name: joi_1.default.string().required(),
    securityCode: joi_1.default.string().min(3).max(4).required(),
    expirationDate: joi_1.default.string().max(5).required(),
    isVirtual: joi_1.default.boolean().required(),
    password: joi_1.default.string().min(4).required(),
    type: joi_1.default.string().valid("debit", "credit", "credit and debit").required(),
    title: joi_1.default.string().required()
});
exports.default = cardSchema;
