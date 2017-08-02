var mongoose = require("mongoose");

// Schema Setup
var forestSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    usfs: String
});

module.exports = mongoose.model("Forest", forestSchema);