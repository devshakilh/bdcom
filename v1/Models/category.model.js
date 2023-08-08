const mongoose = require("mongoose");
var validator = require("validator");

const categorySchema = mongoose.Schema
    ({
        title: String,
        description: String,
        active: Boolean,
        created_at: { type: Date, default: Date.now }
    });


categorySchema.index({ name: "text" });

const category = mongoose.model("category", categorySchema);

module.exports = category;
