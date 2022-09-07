import { ICredentialData } from "../types/credentialTypes";
import * as credentialMethods from "../repositories/credentialRepository";
import { checkError } from "../middlewares/errorHandler";
import { encrypt } from "../utils/userUtils";

export async function createCredential(credential:ICredentialData) {

    const checkCredential = 
    await credentialMethods.findByTitle(credential.title,credential.userId);

    if(checkCredential) throw checkError(401,"You already registered a credential with this title!");

    credential.password = encrypt(credential.password);
    
    await credentialMethods.insert(credential);
}