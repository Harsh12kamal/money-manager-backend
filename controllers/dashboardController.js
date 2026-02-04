import Transaction from "../models/Transaction.js";
import { getDateRange } from "../utils/dateHelpers.js";

export const getSummary = async (req, res) => {
  const { type } = req.query; // daily | weekly | monthly | yearly

  const range = getDateRange(type);
  if (!range) {
    return res.status(400).json({ message: "Invalid type" });
  }

  const summary = await Transaction.aggregate([
    {
      $match: {
        createdAt: {
          $gte: range.start,
          $lte: range.end
        }
      }
    },
    {
      $group: {
        _id: "$type",
        totalAmount: { $sum: "$amount" }
      }
    }
  ]);

  res.json(summary);
};

export const getCategorySummary = async (req, res) => {
  try {
    const summary = await Transaction.aggregate([
      {
        $group: {
          _id: "$category",
          totalAmount: { $sum: "$amount" }
        }
      }
    ]);

    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};