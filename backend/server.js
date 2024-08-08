const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const port = 5000;

dotenv.config();

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("connect to mongodb")
   } catch (error) {
      throw error
   }
}

app.get("/", (req, res) => {
   res.send("Hello express js");
})

app.listen(port, () => {
   connect()
   console.log(`sunucu ${port} portunda çalışıyor`)
})

