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
  workType: [{ type: String }],
  managementSystem: [{ type: String }],
  phases: [
    {
      purpose: {
        type: String,
      },
      phaseMeasure: [{ type: String }],
      phase: {
        type: String,
      },
      stepsOfWork: [{ type: String }],
    },
  ],
});

const WorkSystem = mongoose.model("WorkSystem", workSystemSchema);

exports.WorkSystem = WorkSystem 
