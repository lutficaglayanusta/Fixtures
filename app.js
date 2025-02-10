import express from "express";
import mongoose from "mongoose";
import pageRoute from "./routes/pageRoute.js"
import furnitureRoute from "./routes/furnitureRoute.js"

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/fixtures");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/", pageRoute)
app.use("/furnitures",furnitureRoute)

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} başlatıldı`);
});
