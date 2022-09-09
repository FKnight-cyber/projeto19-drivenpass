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
exports.deleteCredentialById = exports.getCredentialById = exports.getCredentials = exports.createCredential = void 0;
const credentialMethods = __importStar(require("../repositories/credentialRepository"));
const errorHandler_1 = require("../middlewares/errorHandler");
const credentialUtils_1 = require("../utils/credentialUtils");
async function createCredential(credential) {
    const checkCredential = await credentialMethods.findByTitle(credential.title, credential.userId);
    if (checkCredential)
        throw (0, errorHandler_1.checkError)(401, "You already registered a credential with this title!");
    credential.password = (0, credentialUtils_1.encrypt)(credential.password);
    await credentialMethods.insert(credential);
}
exports.createCredential = createCredential;
async function getCredentials(userId) {
    const credentials = await credentialMethods.getMyCredentials(userId);
    credentials.forEach(credential => credential.password = (0, credentialUtils_1.decrypt)(credential.password));
    return credentials;
}
exports.getCredentials = getCredentials;
async function getCredentialById(userId, id) {
    const credential = await credentialMethods.getMyCredentialById(id);
    if (!credential)
        throw (0, errorHandler_1.checkError)(404, "There's no credential registered with this ID");
    if (credential.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This credential doesn't belong to you!");
    credential.password = (0, credentialUtils_1.decrypt)(credential.password);
    return credential;
}
exports.getCredentialById = getCredentialById;
async function deleteCredentialById(userId, id) {
    const credential = await credentialMethods.getMyCredentialById(id);
    if (!credential)
        throw (0, errorHandler_1.checkError)(404, "There's no credential registered with this ID");
    if (credential.userId !== userId)
        throw (0, errorHandler_1.checkError)(401, "This credential doesn't belong to you!");
    await credentialMethods.deleteCredentialById(id);
}
exports.deleteCredentialById = deleteCredentialById;
