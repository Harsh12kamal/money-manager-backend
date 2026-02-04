import express from "express";
import {
  addTransaction,
  editTransaction,
  getTransactions
} from "../controllers/transactionController.js";
import editRestriction from "../middlewares/editRestriction.js";

const router = express.Router();

router.post("/", addTransaction);
router.get("/", getTransactions);
router.put("/:id", editRestriction, editTransaction);

export default router;
