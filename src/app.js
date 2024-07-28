import express from "express";
import dotenv from "dotenv";
import routes from "../routes/routes.js";

dotenv.config(); // 

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use("/api",routes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));