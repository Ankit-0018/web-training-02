const express = require("express");
const cors = require("cors");
const router = require("./authRouter/authRoute");
const {mongoose} =  require("mongoose")
const dotenv = require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DataBase Connected")
}).catch((err) => {
    console.log("DataBase not Connected" , err)
})

const app = express();

const corsOptions = {
    origin: "https://web-training-02.onrender.com", // Replace with your frontend URL
  };
  
  app.use(cors(corsOptions));
app.use(express.json())

app.use("/api/auth" , router)



app.listen(3000, ()=> {

    console.log("Server is Started !!")
})