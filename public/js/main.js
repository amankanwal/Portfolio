console.log("hwllo user ")

document.querySelectorAll('.headder-button').forEach(button => {

    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        
            console.log("btn clicked ")
            // contacts.style.border = "2px solid #fff"
            // contacts.style.transform = "scale(1.1)"
        
            targetElement.classList.add("click-contact") 
            console.log(contacts.classList)
        
            targetElement.addEventListener("animationend", () => {
                console.log(contacts.classList)
                targetElement.classList.remove("click-contact");
            });
        
            
            // contacts.classList.remove("click-contact");
        
   


        console.log(targetId , targetElement);
        window.scrollTo({
            top: targetElement.offsetTop - 125,
            behavior: 'smooth'
        });
    });
});

const headder = document.querySelector(".headder")
const button  = document.querySelector('.button')

button.addEventListener("click" , () => {
    console.log(headder);
    headder.style.position = "relative";
   
})
let aboutButton = document.querySelector(".headder-button")
const classAttribute = aboutButton.getAttribute("class"); 

//adding animation to class contact 
let contactBtn = document.querySelector(".contactBtn")
let contacts = document.querySelector(".contact")

contactBtn.addEventListener("click", () => {
    console.log("btn clicked ")
    // contacts.style.border = "2px solid #fff"
    // contacts.style.transform = "scale(1.1)"

    contacts.classList.add("click-contact") 
    console.log(contacts.classList)

    contacts.addEventListener("animationend", () => {
        console.log(contacts.classList)
        contacts.classList.remove("click-contact");
    });

    
    // contacts.classList.remove("click-contact");

})