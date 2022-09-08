import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserData";
import wifiValidation from "../middlewares/wifiValidation";
import { createWifi, 
    deleteWifiById, 
    getWifiById, 
    getWifis } from "../controllers/wifiController";


const wifiRouter = Router();

wifiRouter.post("/categories/wifis/create",wifiValidation,getUserData,createWifi);
wifiRouter.get("/wifis",getUserData,getWifis);
wifiRouter.get("/wifis/:id",getUserData,getWifiById);
wifiRouter.delete("/wifis/delete/:id",getUserData,deleteWifiById);

export default wifiRouter;