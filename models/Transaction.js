import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    description: String,
    category: {
      type: String,
      required: true
    },
    division: {
      type: String,
      enum: ["office", "personal"],
      required: true
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", TransactionSchema);
