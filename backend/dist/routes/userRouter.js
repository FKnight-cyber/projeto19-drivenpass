"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userValidation_1 = __importDefault(require("../middlewares/authValidation/userValidation"));
const userRouter = (0, express_1.Router)();
userRouter.post('/sign-up', userValidation_1.default, userController_1.signUp);
userRouter.post('/sign-in', userValidation_1.default, userController_1.signIn);
exports.default = userRouter;
