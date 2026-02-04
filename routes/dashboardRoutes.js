import express from "express";
import { getSummary, getCategorySummary } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/summary", getSummary);
router.get("/category-summary", getCategorySummary);
export default router;
