const UserModel = require("../models/user");

const getLogin = (req, res) => {
  res.render("admin/login", { data: {} });
};
const postLogin = async (req, res) => {
  const { email, password } = req.body;
  let error = null;
  const userAccount = await UserModel.find({
    email: email,
    password: password,
  });
  console.log(userAccount);
  if (email == "" || password == "") {
    error = "Email/ Password không được để trống!";
  } else if (userAccount.length > 0) {
    req.session.email = email;
    req.session.password = password;
    res.redirect("/admin/dashboard");
  } else {
    error = "Tài khoản không hợp lệ!";
  }
  res.render("admin/login", { data: { error } });
};
const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/admin/login");
};

module.exports = {
  getLogin,
  postLogin,
  logout,
};
