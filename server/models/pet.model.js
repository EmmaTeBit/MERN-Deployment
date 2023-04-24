const mongoose = require("mongoose");

const PetSchema = {
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name requires at least 3 characters"],
  },
  breed: {
    type: String,
    required: [true, "Breed is required"],
    minLength: [3, "Breed requires at least 3 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [3, "Description requires at least 3 characters"],
  },
  skills: {
    type: [String],
    validate: {
      validator: function (skills) {
        return skills.length <= 3 && skills.length >= 0;
      },
      message: "Pets may have between 0 and 3 skills",
    },
  },
};

module.exports = mongoose.model("Pet", PetSchema);
