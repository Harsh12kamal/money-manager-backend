import Transaction from "../models/Transaction.js";
import Account from "../models/Account.js";
import { buildDateFilter } from "../utils/dateHelpers.js";

export const addTransaction = async (req, res) => {
  const { type, amount, category, division, description, accountId } = req.body;

  const transaction = await Transaction.create({
    type,
    amount,
    category,
    division,
    description,
    account: accountId
  });

  if (accountId) {
    const account = await Account.findById(accountId);
    account.balance += type === "income" ? amount : -amount;
    await account.save();
  }

  res.status(201).json(transaction);
};

export const editTransaction = async (req, res) => {
  const updated = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const getTransactions = async (req, res) => {
  const { category, division, startDate, endDate } = req.query;

  let filter = {};

  if (category) filter.category = category;
  if (division) filter.division = division;

  const dateFilter = buildDateFilter(startDate, endDate);
  if (dateFilter) filter.createdAt = dateFilter;

  const transactions = await Transaction.find(filter).sort({
    createdAt: -1
  });

  res.json(transactions);
};
