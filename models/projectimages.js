const mongoose = require('mongoose')

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
const projectImagesSchema = new mongoose.Schema({
    image1:String,
    image2:String,
})

const Projectimages = mongoose.model("Projectimages" , projectImagesSchema)


module.exports = Projectimages