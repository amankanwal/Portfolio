const express = require("express");
const app = express()
const path = require("path")
// const myPorject = require("./models/myModel");
const { request } = require("http");
const ejsMate = require("ejs-mate")
const Myself = require("./models/myModel")
//using model in our file 
const Projectimages = require("./models/projectimages")
const mongoose = require("mongoose")
require('dotenv').config();
// using middleware 
app.engine('ejs' , ejsMate);
app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"))


async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
           
        });
        console.log("Connected to MongoDB successfully.");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

main();

app.get("/" ,async  (request , response )=> {
    const allProjects = await Myself.find({});
    response.render("index.ejs" , {allProjects})
    // console.log(allProjects);
});

app.get("/skills" , (request , response ) => {
    response.send("you are in skill section ")
})

app.get("/upload" , (req , res)=> { 
    res.render("uploadForm.ejs")
})


app.post("/project", async (req, res) => {
    try {

        let wanderLust = new Projectimages({
            image1:"./projectImages/Screenshot 2024-08-29 175034.png",
            image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&s",
        });
        
        wanderLust.save()
        // Destructure the data from req.body.project
        const { title, owner, description, tech , image } = req.body.project;
        console.log(req.body.project)
        // Create a new instance of the model with the data
        const project = new Myself({
            projectName: title,
            projectOwner: owner,
            projectDescription: description,
            projectImageUrl : image, 
            projectTech: tech, // Assuming you have a techStack field in your schema, or you need to define it in your schema.
        });

        // Save the project to the database
        await project.save().then(() => {
            console.log("data saved in database ")
        }).catch((e) => {
            console.log("save nahi hua : sorry yr ")
        })
        // Send a response to the client
        res.redirect("/")
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).send("There was an error saving the project.");
    }
});


// now of a perticular project id : 

app.get("/project/:id" ,async (request , response ) => {
    const projectId = request.params.id;


    const project =await  Myself.findById(projectId)
    console.log("porject id " , projectId , "of this project " , project);
    response.render("project.ejs" , {project})

});