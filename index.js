



const nav_links = document.querySelector(".extended-nav"); 
const ham = document.querySelector(".user__icon");
const cross = document.querySelector(".cross");

ham.addEventListener("click",()=>{
    
    nav_links.classList.toggle("extend");
    ham.classList.toggle("inactive");
    cross.classList.toggle("active");
})

cross.addEventListener("click",()=>{
    nav_links.classList.remove("extend");
    ham.classList.remove("inactive");
    cross.classList.remove("active");
})