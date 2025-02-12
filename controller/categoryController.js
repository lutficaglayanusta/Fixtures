import Category from "../model/Category.js";

export const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body)

        res.status(200).json({
            status:"success",
            category
        })
    } catch (error) {
        
    }
}
export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find()

        res.status(200).render("furnitures", {
          page_name: "furnitures",
          categories,
        });
    } catch (error) {
        
    }
}