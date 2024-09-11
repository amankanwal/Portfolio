const mongoose = require("mongoose");

// Define the schema
const myProjectSchema = new mongoose.Schema({
    
    projectName: String,
    projectOwner: String,
    projectTech : String,
    projectDescription: String,
    projectImageUrl:String,

});



// Create a model from the schema
const Myself = mongoose.model("Myself", myProjectSchema);

// Export the model
module.exports = Myself;
