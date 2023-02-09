const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    price: { type: Number, required: true, min: 0 },

    description: {
      type: String,
      maxLength: 5000,
      trim: true,
    },
    material: [
      {
        type: String,
      },
    ],

    pictures: [
      {
        type: String,
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
