const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workSystemSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
  },
  pageOwner: {
    type: String,
  },
  leadershipRail: {
    type: String,
  },
  managementRail: {
    type: String,
  },
  workType: [
    {
      value: {
        type: String,
      },

      color: {
        type: String,
      },
    },
  ],
  managementSystem: [
    {
      value: {
        type: String,
      },

      color: {
        type: String,
      },
    },
  ],
  phases: [
    {
      purpose: {
        type: String,
      },
      phaseMeasure: [{ type: String }],
      phase: {
        type: String,
      },
      stepsOfWork: [
        {
          value: {
            type: String,
          },

          color: {
            type: String,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("WorkSystem", workSystemSchema);
