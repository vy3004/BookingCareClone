import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/khavy", (req, res) => {
    return res.send("Hello world Kha Vy");
  });
  return app.use("/", router);
};

module.exports = initWebRouters;
