const express = require("express");
const router = express.Router();

//diğer rota dosyalarını içe aktardık

const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupon.js")
const userRoute = require("./users.js")
const paymentRoute = require("./payment")
//Her rotayı ilgili yol altında kullanıyoruz 
router.use("/products", productRoute);
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute)
router.use("/users", userRoute)
router.use("/products", productRoute);
router.use("/payment", paymentRoute);

module.exports = router;
