import mongoose, { mongo, Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const IP=process.env.IP;

mongoose.connect(IP);

const Portifolio=mongoose.model("Portifolio",new Schema({
    titulo:String,
    descricao:String
})
)

export default Portifolio
