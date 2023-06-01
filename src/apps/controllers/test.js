const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

//const test = async (req, res) => {
  // res.send(`
  //       <form method=post>
  //           <input type=text name=email />
  //           <br />
  //           <input type=text name=password />
  //           <br />
  //           <input type=submit name=submit value=Send />
  //       </form>
  //   `);
  // const data2 = "ReactJS";

  // res.render("admin/test", { data2 });
  // res.redirect("admin/dashboard");

  // Find all documents
  // CategoryModel.find({}, (err, docs) => {
  //   console.log(docs);
  // })

  // Add new documents
  // const category = {
  //   description: "BPhone description",
  //   title: "BPhone",
  //   slug: "bphone"
  // }

  // new CategoryModel(category, {versionKey: false}).save()

  // Update one document
  // CategoryModel.updateOne({_id:"643aa309a53b61ead9050dd2"}, {title: "BPhone BK"}).exec((err, docs) => {
  //   console.log(err);
  //   console.log(docs);
  // })

  //Update many documents
  // CategoryModel.updateMany({ title: "BPhone" }, { title: "BPhone BK" }).exec(
  //   (err, docs) => {
  //     console.log(err);
  //     console.log(docs);
  //   }
  // );

  //Delete one
  // CategoryModel.deleteOne({title: "BPhone"}, (err, docs) => {
  //   console.log(err);
  //   console.log(docs);
  // })

  //Delete many
  // CategoryModel.deleteMany({title: "BPhone"}, (err, docs) => {
  //   console.log(err);
  //   console.log(docs);
  // })

  // Get from many collections
  // ProductModel.find().populate({path: "cat_id"}).exec((err, docs) => {
  //   console.log(docs);
  // })

  // const str = "Welcome";
  // setTimeout(() => {
  //   console.log("NodeJS");
  // }, 3000);

  // const promise = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res(str + " NodeJS!");
  //   }, 3000);
  // });
  // promise.then((result) => {
  //   console.log(result);
  // })

//   const categories = await CategoryModel.find();
//   const products = await ProductModel.find();
//   console.log(categories.length + products.length);
// };
// const test2 = (req, res) => {
//   res.send({
//     email: req.body.email,
//     password: req.body.password,
//   });
// };

const test = async (req, res) => {
  req.session.email = "vietpro@gmail.com"
  res.send(req.session.email)
}
const test1 = (req, res) => {
  if(req.session.email){
    res.send("session defined")
  }
  else {
    res.send("session not defined")``
  }
}
const test2 = (req, res) => {
  req.session.destroy();
}

module.exports = {
  test,
  test1,
  test2,
}
