"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
function encrypt(password) {
    return cryptr.encrypt(password);
}
exports.encrypt = encrypt;
function decrypt(password) {
    return cryptr.decrypt(password);
}
exports.decrypt = decrypt;
