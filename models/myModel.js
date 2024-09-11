const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Portfolio", {
            
        });
        console.log("Connected to MongoDB successfully.");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

main();

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
