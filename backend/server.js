const express = require("express");
const app = express();


app.get("/",(req,res)=>{
   res.send("Hello express js");
})

app.listen(5000,()=>{
   console.log(`sunucu ${5000} portunda çalışıyor`)
})

