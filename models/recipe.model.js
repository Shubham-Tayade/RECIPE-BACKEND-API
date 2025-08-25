import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: String, required: true }, // you can replace with userId if auth
  createdAt: { type: Date, default: Date.now },
});

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    photo: { type: String }, // store image URL
    comments: [commentSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
