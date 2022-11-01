const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workDirectionSchema = new Schema({
     user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
    name: {
        type: String
    },
    pageOwner: {
        type: String
    },
    overallWorkDirectionPurpose: {
        type: String
    },
    statements: [{
        directionalStatement: {
            type: String
        },
        statementPurpose :{
            type: String
        },
        statementOwner: [{type: String} ],
        phases: [{
            input: {
                type: String
            },
            elements : [{type: String}]
        }],
        outcome: [{type: String}],
        pdca: [{type: String}]
    }]
})

module.exports = mongoose.model("WorkDirection", workDirectionSchema)