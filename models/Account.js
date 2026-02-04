import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["cash", "bank", "credit"],
      required: true
    },
    balance: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Account", accountSchema);
