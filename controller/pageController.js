import Furniture from "../model/Furnitures.js";
import mongoose from "mongoose";

export const getIndexPage = async (req, res) => {
  const furnitures = await Furniture.find();
  res.status(200).render("index", {
    page_name: "index",
    furnitures,
  });
};
export const getAboutPage = async (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
export const getContactPage = async (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};
export const getRegisterPage = async (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};
export const getLoginPage = async (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};

export const getFilterCategoryPage = async (req, res) => {
  const { id } = req.params;
  const furnitureCategories = await Furniture.find({ category: id});
  

  res.status(200).render("category", {
    furnitureCategories,
    page_name: "category",
  })
}
