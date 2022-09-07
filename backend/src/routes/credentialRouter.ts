import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserData";
import credentialValidation from "../middlewares/credentialValidation";
import createCredential from "../controllers/credentialController";

const credentialRouter = Router();

credentialRouter.post("/categories/credentials/create",credentialValidation,getUserData,createCredential);

export default credentialRouter;