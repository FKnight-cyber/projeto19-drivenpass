import connection from "../database/pg";
import { ICredentialData } from "../types/credentialTypes";

export async function insert(credential:ICredentialData) {
    await connection.credentials.create({data: credential});
}

export async function findByTitle(title:string,userId:number) {
    return await connection.credentials.findFirst({where: {title,userId}});
}