import express from "express"
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app =express.Router();

//Create New Product- /api/v1/product/new

app.post("/new",adminOnly,singleUpload,newProduct);

//to get 10 last product- /api/v1/product/latest
app.get("/latest",getlatestProducts);

//to get all products with filters
app.get("/all",getAllProducts);

//To get all unique Categories -/api/v1/product/categories
app.get("/categories",getAllCategories)

// To get all products -/api/v1/product/admin-products
app.get("/admin-products",getAdminProducts);

//to get update and delete products 
app.route("/:id").get(getSingleProduct).put(adminOnly,singleUpload,updateProduct).delete(adminOnly,deleteProduct);

export default app;
