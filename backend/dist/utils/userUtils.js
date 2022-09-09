"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserToken = exports.verifyPassword = exports.encrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function encrypt(password) {
    const salt = bcrypt_1.default.genSaltSync(10);
    return bcrypt_1.default.hashSync(password, salt);
}
exports.encrypt = encrypt;
async function verifyPassword(password, hash) {
    const match = await bcrypt_1.default.compare(password, hash);
    return !match;
}
exports.verifyPassword = verifyPassword;
const generateUserToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: 1200,
    });
};
exports.generateUserToken = generateUserToken;
