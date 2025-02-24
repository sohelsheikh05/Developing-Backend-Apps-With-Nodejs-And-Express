import express from "express";
import { putReview, getReview, deleteReview } from "../controllers/review.controller.js";
import authenticateToken from "../Middleware/checkauthentication.js";
const router = express.Router();


router.put("/putreview/:BookISBN",authenticateToken, putReview);
router.get("/getreview/:BookISBN", getReview);
router.delete("/deletereview/:BookISBN",authenticateToken, deleteReview);

export default router;