import Account from "../models/Account.js";
import Transaction from "../models/Transaction.js";

export const createAccount = async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const transferAmount = async (req, res) => {
  try {
    const { fromAccountId, toAccountId, amount } = req.body;

    const from = await Account.findById(fromAccountId);
    const to = await Account.findById(toAccountId);

    if (!from || !to) {
      return res.status(404).json({ error: "Account not found" });
    }

    if (from.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    // Update balances
    from.balance -= amount;
    to.balance += amount;

    await from.save();
    await to.save();

    // 🔹 Track transfer as transactions
    await Transaction.create([
      {
        type: "expense",
        amount,
        category: "transfer",
        division: "office",
        account: fromAccountId,
        description: "Transfer to another account"
      },
      {
        type: "income",
        amount,
        category: "transfer",
        division: "office",
        account: toAccountId,
        description: "Transfer from another account"
      }
    ]);

    res.json({ message: "Transfer successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
