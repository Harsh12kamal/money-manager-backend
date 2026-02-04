import express from "express";
import {
  createAccount,
  getAccounts,
  transferAmount
} from "../controllers/accountController.js";

const router = express.Router();

router.post("/", createAccount);
router.get("/", getAccounts);
router.post("/transfer", transferAmount);

export default router;
