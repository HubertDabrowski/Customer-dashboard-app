import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import customers from "./routes/customers.js"
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", customers)

const port = process.nextTick.PORT || 3005;
app.listen(port, ()=>{
  console.log(`Server is working on port ${port}`);
})