import { Request, Response } from "express";
import { ICredentialData } from "../types/credentialTypes";
import * as credentialServices from "../services/credentialService"

export default async function createCredential(req:Request, res:Response){
    const { url,username,password,title } 
    : { url:string,username:string,password:string,title:string } = req.body;

    const { userInfo } = res.locals;

    const credential:ICredentialData = {
        url,
        username,
        password,
        title,
        userId: userInfo.userId
    }

    await credentialServices.createCredential(credential);

    return res.status(201).send("created");
}