import Transaction from "../models/Transaction.js";
import { canEditTransaction } from "../utils/dateHelpers.js";

const editRestriction = async (req, res, next) => {
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  if (!canEditTransaction(transaction.createdAt)) {
    return res
      .status(403)
      .json({ message: "Editing restricted after 12 hours" });
  }

  next();
};

export default editRestriction;
