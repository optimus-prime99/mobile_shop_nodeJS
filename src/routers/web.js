const express = require("express");
const router = express.Router();

//Import Controller

const TestController = require("../apps/controllers/test");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");

//Import Middleware
const AuthMiddleware = require("../apps/middlewares/auth");
const UploadMiddleware = require("../apps/middlewares/upload");

router.get("/", (req, res) => {
  res.send("<h1>Welcome Hai</h1>");
});

//Test
//
//
//
router.get(
  "/test",
  (req, res, next) => {
    console.log("Middleware");
    next();
  },
  TestController.test
);
router.get("/test1", TestController.test1);
router.get("/test2", TestController.test2);
// router.post("/test3", TestController.test2)
//
//
//

router.get("/login", (req, res) => {
  res.send(`<h1>Normal Login</h1>`);
});
router.get("/user/:userID/products/:productID", (req, res) => {
  res.send(
    `Data of user #${req.params.userID} with product #${req.params.productID}`
  );
  console.log(req.params);
});

//Admin Authorization
router.get("/admin/login", AuthMiddleware.checkLogin, AuthController.getLogin);
router.post(
  "/admin/login",
  AuthMiddleware.checkLogin,
  AuthController.postLogin
);
router.get("/admin/logout", AuthMiddleware.checkAdmin, AuthController.logout);
router.get(
  "/admin/dashboard",
  AuthMiddleware.checkAdmin,
  AdminController.index
);

//Products
router.get(
  "/admin/products",
  AuthMiddleware.checkAdmin,
  ProductController.index
);
router.get(
  "/admin/products/create",
  AuthMiddleware.checkAdmin,
  ProductController.create
);
router.post(
  "/admin/products/store",
  AuthMiddleware.checkAdmin,
  UploadMiddleware.single("thumbnail"),
  ProductController.store
);
router.get(
  "/admin/products/edit/:id",
  AuthMiddleware.checkAdmin,
  ProductController.edit
);
router.post(
  "/admin/products/update/:id",
  AuthMiddleware.checkAdmin,
  UploadMiddleware.single("thumbnail"),
  ProductController.update
);
router.get(
  "/admin/products/delete/:id",
  AuthMiddleware.checkAdmin,
  ProductController.del
);

//Users

router.get("/admin/users", (req, res) => {
  res.send("<h1>Admin Users</h1>");
});
router.get("/admin/users/create", (req, res) => {
  res.send("<h1>Admin User Create</h1>");
});
router.get("/admin/users/edit/:id", (req, res) => {
  res.send(`<h1>Admin User Edit user #${req.params.id} </h1>`);
});
router.get("/admin/users/delete/:id", (req, res) => {
  res.send(`<h1>Admin User Delete user #${req.params.id} </h1>`);
});

//Categories

router.get("/admin/categories", (req, res) => {
  res.send("<h1>Admin Categories</h1>");
});
router.get("/admin/categories/create", (req, res) => {
  res.send("<h1>Admin Categories Create</h1>");
});
router.get("/admin/categories/edit/:id", (req, res) => {
  res.send(`<h1>Admin Categories Edit category #${req.params.id} </h1>`);
});
router.get("/admin/categories/delete/:id", (req, res) => {
  res.send(`<h1>Admin Categories Delete category #${req.params.id} </h1>`);
});



module.exports = router;
