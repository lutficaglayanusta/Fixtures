import express from "express";
import pageRoute from "./routes/pageRoute.js"

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/",pageRoute)

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} başlatıldı`);
});
