const { Router } = require("express");
const ControllersProducts = require("../controllers/Controllers")

const router = Router()

router.get("/products", ControllersProducts.getAllProducts)
router.get("/products/:id", ControllersProducts.getProductsByid)
router.post("/products", ControllersProducts.AddProduct)
router.put("/products/:id",ControllersProducts.updateProducts)
router.delete("/products/:id",ControllersProducts.DeleteProduct)

module.exports = router