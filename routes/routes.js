import {Router} from "express";
import warehouseRoutes from "./warehouseRoutes.js";

const routes = Router();

routes.use("/warehouses", warehouseRoutes);


export default routes;