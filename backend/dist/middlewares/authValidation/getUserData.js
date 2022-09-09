"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sessionRepository_1 = require("../../repositories/sessionRepository");
const errorHandler_1 = require("../errorHandler");
async function getUserData(req, res, next) {
    const token = req.headers['x-access-token'].toString();
    if (!token)
        throw (0, errorHandler_1.checkError)(401, "You must send authorization token!");
    const session = await (0, sessionRepository_1.findSession)(token);
    if (!session)
        throw (0, errorHandler_1.checkError)(401, "This token is invalid or has expired!");
    const userInfo = {
        token,
        userId: session.userId
    };
    res.locals.userInfo = userInfo;
    next();
}
exports.default = getUserData;
