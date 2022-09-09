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
const credentialServices = __importStar(require("../services/credentialService"));
async function createCredential(req, res) {
    const { url, username, password, title } = req.body;
    const { userInfo } = res.locals;
    const credential = {
        url,
        username,
        password,
        title,
        userId: userInfo.userId
    };
    await credentialServices.createCredential(credential);
    return res.status(201).send("created");
}
exports.createCredential = createCredential;
;
async function getCredentials(req, res) {
    const { userInfo } = res.locals;
    const credentials = await credentialServices.getCredentials(userInfo.userId);
    return res.status(200).send(credentials);
}
exports.getCredentials = getCredentials;
async function getCredentialById(req, res) {
    const { userInfo } = res.locals;
    const id = Number(req.params.id);
    const credential = await credentialServices.getCredentialById(userInfo.userId, id);
    return res.status(200).send(credential);
}
exports.getCredentialById = getCredentialById;
async function deleteCredentialById(req, res) {
    const { userInfo } = res.locals;
    const id = Number(req.params.id);
    await credentialServices.deleteCredentialById(userInfo.userId, id);
    return res.status(200).send("Credential removed!");
}
exports.deleteCredentialById = deleteCredentialById;
