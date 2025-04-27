import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectdb from "./Server/db.js";
import bookRouter from "./Routes/bookRouter.js";
import userRouter from "./Routes/userRouter.js";
dotenv.config();

connectdb()

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", bookRouter)
app.use("/",userRouter)

let port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);  
})
 
