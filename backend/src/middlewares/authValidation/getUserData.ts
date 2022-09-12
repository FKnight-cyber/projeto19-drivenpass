import { Request, Response, NextFunction } from "express";
import { findSession } from "../../repositories/sessionRepository";
import { checkError } from "../errorHandler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default async function getUserData(req:Request, res:Response, next:NextFunction){
    const token = req.headers['x-access-token'].toString();

    if(!token) throw checkError(401, "You must send authorization token!");

    const SECRET = process.env.JWT_SECRET;

    try {
        jwt.verify(token,SECRET);
    } catch (error) {
        return res.status(401).send("Invalid token");
    }
    
    const session = await findSession(token);
    
    if(!session) throw checkError(401, "This token has expired!");

    const userInfo = {
        token,
        userId: session.userId
    };

    res.locals.userInfo = userInfo;
    
    next();
}