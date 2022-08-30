import express from "express";
import reservasController from "./controllers/reservasController.js"
import autenticacao from './middleware/autenticacao.js'
import * as dotenv from "dotenv"
import cors from "cors";

dotenv.config()



const app = express();
const port = process.env.PORT || 3000;




app.use(express.json());

app.use(cors());

autenticacao(app)
reservasController(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})