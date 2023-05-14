const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
    name:{
        type: String,
        required: [true,"Name is required"],
        minlength: [3,"Name must be at least 2 characters long"],
        maxlength: [255,"Name cannot be more than 255 characters long"]
        }
    },
    {timestamps:true}
)

const Author = mongoose.model("Author",AuthorSchema)

module.exports = Author;