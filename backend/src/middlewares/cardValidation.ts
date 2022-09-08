import cardSchema from "../schemas/cardSchema";
import { Request, Response, NextFunction } from "express";

export default function cardValidation(req:Request, res:Response, next:NextFunction){

    const { error } = cardSchema.validate(req.body, { abortEarly:false });

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}