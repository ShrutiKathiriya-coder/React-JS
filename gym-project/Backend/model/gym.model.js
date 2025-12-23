const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        membershipType: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        fees: {
            type: Number,
            required: true
        },
        joinDate: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("Gym", gymSchema, "Gym");
