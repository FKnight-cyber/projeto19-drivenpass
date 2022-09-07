import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserData";
import credentialValidation from "../middlewares/credentialValidation";
import { createCredential, 
    getCredentials,
    getCredentialById,
    deleteCredentialById
 } from "../controllers/credentialController";

const credentialRouter = Router();

credentialRouter.post("/categories/credentials/create",credentialValidation,getUserData,createCredential);
credentialRouter.get("/credentials",getUserData,getCredentials);
credentialRouter.get("/credentials/:id",getUserData,getCredentialById);
credentialRouter.delete("/credentials/delete/:id",getUserData,deleteCredentialById);

export default credentialRouter;