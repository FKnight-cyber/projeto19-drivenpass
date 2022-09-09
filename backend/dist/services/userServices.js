"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const userRepository_1 = require("../repositories/userRepository");
const sessionRepository_1 = require("../repositories/sessionRepository");
const userUtils_1 = require("../utils/userUtils");
const userUtils_2 = require("../utils/userUtils");
const errorHandler_1 = require("../middlewares/errorHandler");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function signUp(user) {
    const { email, password } = user;
    const checkUser = await (0, userRepository_1.findUserByEmail)(email);
    if (checkUser)
        throw (0, errorHandler_1.checkError)(401, "This email is already registered!");
    await (0, userRepository_1.register)(email, (0, userUtils_1.encrypt)(password));
}
exports.signUp = signUp;
async function signIn(email, password) {
    const user = await (0, userRepository_1.findUserByEmail)(email);
    if (!user)
        throw (0, errorHandler_1.checkError)(404, "There's no user registered with this email!");
    if (await (0, userUtils_1.verifyPassword)(password, user.password))
        throw (0, errorHandler_1.checkError)(401, "Wrong password!");
    const token = (0, userUtils_2.generateUserToken)(user.id);
    const userInfo = {
        userId: user.id,
        token
    };
    await (0, sessionRepository_1.newSession)(userInfo);
    return userInfo;
}
exports.signIn = signIn;
