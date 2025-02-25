import Furniture from "../model/Furnitures.js";

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
