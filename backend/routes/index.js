const express = require("express");
const router = express.Router();

//diğer rota dosyalarını içe aktardık

const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
//Her rotayı ilgili yol altında kullanıyoruz 
router.use("/products", productRoute)
router.use("/categories", categoryRoute)
router.use("/auth", authRoute);

module.exports = router;
