import Express from "express";
import dotenv from "dotenv"
import Portifolio from "./Connection.js";
dotenv.config()

const App=Express()
const PORT=process.env.PORTA


App.use(Express.json())



App.listen(PORT,()=>{
    console.log(`Servidor Rodando na Porta ${PORT}`)
})