const { Schema, model } = require("mongoose");

module.exports = model(
  "UserSchema",
  new Schema({
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },

    listGroups: [
      {
        groupTitle: {
          type: String,
          required: true,
        },
        todos: [
          {
            label: {
              type: String,
              required: true,
            },
            done: {
              type: Boolean,
              required: true,
              default: false,
            },
            inProgres: {
              type: Boolean,
              default: false,
              required: true,
            },
          },
        ],
      },
    ],
    //   userSetings: { theme: "red" },
    // selectedGpoupId: String,
  })
);
