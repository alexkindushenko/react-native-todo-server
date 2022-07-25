const { Schema, model } = require("mongoose");

module.exports = model(
  "UserSchema",
  new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },

    listGroups: [
      {
        groupTitle: {
          type: String,
          required: true,
        },
        todos: [
          {
            title: {
              type: String,
              required: true,
            },
            done: {
              type: Boolean,
              required: true,
              default: false,
            },
          },
        ],
      },
    ],

    selectedGpoupId: Schema.Types.ObjectId,
  })
);
