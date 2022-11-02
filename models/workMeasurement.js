const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const  WorkMeasurementSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String
    },
    pageOwner: {
        type: String
    },
    period : {
        type: String
    },
    measurememt : [{
            imageUrl: {
                type: String
            },
            colorRate : {
                type: String
            },
            salesInventory: [{
                    date: {
                        type: String
                    },
                    target: {
                        type: String
                    }, 
                    actual: {
                        type: String
                    }
            }],
            ownerList: [{
                 name: {
                    type: String
                 },
                 owner: {
                    type: String
                 },
                 scope: {
                    type: String
                 },
                 dataSource: {
                    type : String
                 },
                 target: {
                    type : String
                 },
                 actual : {
                    type : String
                 }
            }],
            currentState : [{type: String}],
            pdca: [{type: String}]
    }]
})

module.exports = mongoose.model("WorkMeasurement", WorkMeasurementSchema)