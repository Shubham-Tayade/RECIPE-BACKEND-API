import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe,
  addComment,
} from "../controllers/recipe.controller.js";

const router = express.Router();

router.post("/", createRecipe);           // Create Recipe
router.get("/", getAllRecipes);           // Get All Recipes
router.get("/:id", getSingleRecipe);      // Get Single Recipe
router.put("/:id", updateRecipe);         // Update Recipe
router.delete("/:id", deleteRecipe);      // Delete Recipe
router.post("/:id/comments", addComment); // Post a Comment

export default router;
