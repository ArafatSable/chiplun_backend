const mongoose = require("mongoose");
const Touristplaces = require("../models/touristplaces");
const Restuarants = require("../models/restuarants");
const Hospital = require("../models/hospital");
const touristplacesdata = require("./touristplaces");
const restuarantsdata = require("./restuarants");
const hospitaldata = require("./hospital");

mongoose.set("strictQuery", false);
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });

const DB1 = process.env.DB1;
if (!DB1) {
  console.error("Missing MongoDB connection string.");
  process.exit(1);
}

mongoose.connect(DB1, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Backend Data set connected");
  try {
    await seedDBTouristplaces();
    await seedDBRestuarants();
    await seedDBHosandmeds();
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
});

const seedDBTouristplaces = async () => {
  await Touristplaces.deleteMany({});
  for (const touristplacedata of touristplacesdata) {
    const touristplace = new Touristplaces(touristplacedata);
    await touristplace.save();
  }
};

const seedDBRestuarants = async () => {
  await Restuarants.deleteMany({});
  for (const restuarantdata of restuarantsdata) {
    const restuarant = new Restuarants(restuarantdata);
    await restuarant.save();
  }
};

const seedDBHosandmeds = async () => {
  await Hospital.deleteMany({});
  for (const hosandmeddata of hospitaldata) {
    const hosandmed = new Hospital(hosandmeddata);
    await hosandmed.save();
  }
};
