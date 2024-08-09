const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js")

//yeni kategori oluşturma (create)
router.post("/", async (req, res) => {
   try {
      const { name, img } = req.body;
      const newCategory = new Category({ name, img })
      await newCategory.save()

      res.status(201).json(newCategory)
   } catch (error) {
      console.log(error)
   }
})
//tüm kategorileri getirme (read)
router.get("/", async (req, res) => {
   try {
      const categories = await Category.find();
      res.status(200).json(categories)
   } catch (error) {
      res.status(500).json({ error: "Server error" })
   }
})

//belirli bir kateroriyi getirme (read single)
router.get("/:categoryId", async (req, res) => {
   try {
      const categoryId = req.params.categoryId
      try {
         const category = await Category.findById(categoryId)
         res.status(200).json(category)
      } catch (error) {
         console.log(error)
         res.status(404).json({ error: "category not found" })
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server error" })
   }

})
module.exports = router;