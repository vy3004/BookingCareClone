import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

let getCRUD = async (req, res) => {
  try {
    return res.render("crud.ejs");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
};
