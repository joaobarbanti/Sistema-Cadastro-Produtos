const Product = require("../Model/ProductSchema");

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    return console.log(err);
  }

  if (!products) {
    return res.json({ message: "nao foi possivel encontrar os produtos" });
  } else {
    return res.json({ products });
  }
};

const getProductsByid = async (req, res, next) => {
  const { id } = req.params;
  let products;
  try {
    products = await Product.findById(id);
  } catch (err) {
    return console.log(err);
  }

  if (!products) {
    return res.json({ message: "nao foi possivel encontrar produto" });
  } else {
    return res.json({ products });
  }
};
const AddProduct = async (req, res, next) => {
  const { name, price, number } = req.body;
  let products;
  try {
    products = new Product({
      name,
      price,
      number,
    });
    await products.save();
  } catch (err) {
    return console.log(err);
  }

  if (!products) {
    return res.json({ message: "nao foi possivel adicionar produto" });
  } else {
    return res.json({ products });
  }
};
const updateProducts = async (req, res, next) => {
  const { id } = req.params;
  const { name, price, number } = req.body;
  let products;
  try {
    products = await Product.findByIdAndUpdate(id, {
      name,
      price,
      number,
    });
    await products.save();
  } catch (err) {
    return console.log(err);
  }

  if (!products) {
    return res.json({ message: "nao foi possivel editar produto" });
  } else {
    return res.json({ products });
  }
};
const DeleteProduct = async (req, res, next) => {
  const { id } = req.params;
  let products;
  try {
    products = await Product.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }

  if (!products) {
    return res.json({ message: "nao foi possivel deletar produto" });
  } else {
    return res.json({ products });
  }
};
exports.getAllProducts = getAllProducts;
exports.getProductsByid = getProductsByid;
exports.AddProduct = AddProduct;
exports.updateProducts = updateProducts;
exports.DeleteProduct = DeleteProduct;
