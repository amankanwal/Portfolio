const mongoose = require('mongoose')

const projectImagesSchema = new mongoose.Schema({
    image1:String,
    image2:String,
})

const Projectimages = mongoose.model("Projectimages" , projectImagesSchema)


module.exports = Projectimages