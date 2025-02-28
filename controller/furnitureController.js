import Furniture from "../model/Furnitures.js";

export const addFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.create(req.body);

    res.status(201).json({
      success: true,
      furniture,
      message: "Successfully add furniture",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Unsuccessfull add furniture",
      error,
    });
  }
};
export const getAllFurniture = async (req, res) => {
  try {
    const categorySlug = req.query.categories;

    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category: category._id };
    }

    const furnitures = await Furniture.find(filter);

    res.status(200).render("furnitures", {
      furnitures,
      page_name: "furnitures",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
export const getFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.findOne({ slug: req.params.slug });

    res.status(200).render("furniture", {
      furniture,
      page_name: "furtinure",
    });
  } catch (error) {}
};
