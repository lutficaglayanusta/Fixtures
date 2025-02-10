import mongoose from "mongoose";
import slugify from "slugify";
const Schema = mongoose.Schema;

const FurnituresSchema = new Schema({
  title: {
        type: String,
        required:true
  },
  description: {
      type: String,
      required: true,
      trim:true
  },
  image: {
    type: String,
    },
    createAt: {
        type: Date,
        default:Date.now
  },
  slug: {
    type: String,
    unique:true
  }
});
FurnituresSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, {
    lower: true,
    strict:true
  })
  next()
})

const Furniture = mongoose.model("Furniture", FurnituresSchema);

export default Furniture;
