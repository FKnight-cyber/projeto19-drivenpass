"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserData_1 = __importDefault(require("../middlewares/authValidation/getUserData"));
const credentialValidation_1 = __importDefault(require("../middlewares/credentialValidation"));
const credentialController_1 = require("../controllers/credentialController");
const credentialRouter = (0, express_1.Router)();
credentialRouter.post("/categories/credentials/create", credentialValidation_1.default, getUserData_1.default, credentialController_1.createCredential);
credentialRouter.get("/credentials", getUserData_1.default, credentialController_1.getCredentials);
credentialRouter.get("/credentials/:id", getUserData_1.default, credentialController_1.getCredentialById);
credentialRouter.delete("/credentials/delete/:id", getUserData_1.default, credentialController_1.deleteCredentialById);
exports.default = credentialRouter;
