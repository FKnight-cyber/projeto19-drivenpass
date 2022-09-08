import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserData";
import wifiValidation from "../middlewares/wifiValidation";
import { createWifi, 
    deleteWifiById, 
    getWifiById, 
    getWifis } from "../controllers/wifiController";


const wifiRouter = Router();

wifiRouter.post("/categories/wifi/create",wifiValidation,getUserData,createWifi);
wifiRouter.get("/wifi",getUserData,getWifis);
wifiRouter.get("/wifi/:id",getUserData,getWifiById);
wifiRouter.delete("/wifi/delete/:id",getUserData,deleteWifiById);

export default wifiRouter;