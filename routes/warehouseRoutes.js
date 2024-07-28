import {Router} from 'express';

const warehouseRoutes = Router();
warehouseRoutes.get("/", ()=>console.log("Hola"));

export default warehouseRoutes;