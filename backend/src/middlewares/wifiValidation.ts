import wifiSchema from "../schemas/wifiSchema";
import { Request, Response, NextFunction } from "express";

export default function wifiValidation(req:Request, res:Response, next:NextFunction){

    const { error } = wifiSchema.validate(req.body, { abortEarly:false });

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}