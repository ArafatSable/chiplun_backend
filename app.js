const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const app = express();

const Touristplaces = require("./models/touristplaces");
const Restuarants = require("./models/restuarants");
const Hosandmeds = require("./models/hospital");

const cookieParser = require('cookie-parser')


require('./db/connect');


app.use(express.json());
app.use(cookieParser())

const methodOverride = require("method-override");

//we link router file
app.use(require("./router/chiplun"));

//DB


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


require("dotenv").config();

const port=process.env.BASEURL || 5000;
app.get('/', async (req, res) => {
    console.log("THis is home page")
    res.send("This is home page")
}); 
app.get('/about', async (req, res) => {
    console.log("THis is about page")
    res.send("This is about page")
});
app.get('/services', async (req, res) => {
    console.log("THis is servies page")
    res.send("This is servies page")
});
app.get('/contact', async (req, res) => {
    console.log("THis is contact page")
    res.send("This is contact page")
});
app.all("*", (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
  });
  
  app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    res.status(statusCode).render("error", { err });
  });
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});
