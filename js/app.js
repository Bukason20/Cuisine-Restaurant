
const body = document.querySelector("body")
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".nav-links")
const menuSelection = document.querySelector(".menu-selection");
const menuType = document.querySelector(".menu-type")
const soups = document.querySelector("#soups");
const continentalDishes = document.querySelector("#continental-dishes")
const soupsContainer = document.querySelector(".soups")
const continentalDishesContainer = document.querySelector(".continental-dishes")
const burgerContainer = document.querySelector(".burger-container")
const burger = document.querySelectorAll(".burger")
const cards = document.querySelectorAll(".testimonial-card")
const cardsContainer = document.querySelector(".testimonial-slide-content")
const testimonialImg = document.querySelector("#testimonial-img")
const testimonialImg2 = document.querySelector("#testimonial-img2")
const testimonialImg3 = document.querySelector("#testimonial-img3")
const readMore = document.querySelector(".read-more")
const burgers = Array.from(burger)

const images1 = ["man1", "woman1", "man2", "woman3", "woman2"]
const images2 = ["woman5", "man3", "woman4", "man4", "woman6"]
const images3 = ["man1", "woman5", "woman1", "man3", "man2", "woman4", "woman3", "man4", "woman2", "woman6"]
let i = 0
let j = 0
readMore.addEventListener("click", () => {
    if(i === 4){
        i = 0
    }else {
        i++
        testimonialImg.style.animation = "displayImg 1s forwards ease-in-out;"
    }
    if(j === 9){
        j = 0
    }else {
        j++
    }

    console.log(j)

    testimonialImg.src = `./images/${images1[i]}.jpg`
    
    testimonialImg2.src = `./images/${images2[i]}.jpg`
    testimonialImg3.src = `./images/${images3[j]}.jpg`
    
})

menuType.addEventListener("click", (e) => {
    if(e.target.id === "soups" || e.target.id !== "continental-dishes"){
        soupsContainer.style.display = "grid";
        soups.classList.add("active")
        continentalDishesContainer.style.display = "none";
        continentalDishes.classList.remove("active")
    }else if(e.target.id === "continental-dishes" || e.target.id !== "soups"){
        continentalDishesContainer.style.display = "grid";
        continentalDishes.classList.add("active")
        soupsContainer.style.display = "none";
        soups.classList.remove("active")
    }
    console.log(e.target.id)
})

burgerContainer.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    if(navLinks.classList.contains("active") && window.scrollY >= 0){
        navBar.classList.add("active")
        burgers.map((burg) => {
            burg.style.backgroundColor = "white"
        })
    }else if(!navLinks.classList.contains("active") && window.scrollY < 100){
        navBar.classList.remove("active")
        body.style.overflowX = "hidden"
        burgers.map((burg) => {
            burg.style.backgroundColor = "black"
        })
    }
   
    
})

window.onscroll = function() {
    if(window.scrollY >= 100 ){
        navBar.classList.add("active")
        
        burgers.map((burg) => {
            burg.style.backgroundColor = "white"
        })
    }else if(window.scrollY < 100 && navLinks.classList.contains("active")) {
        navBar.classList.add("active")
        burgers.map((burg) => {
            burg.style.backgroundColor = "white"
        })
    }else {
        navBar.classList.remove("active")
        burgers.map((burg) => {
            burg.style.backgroundColor = "black"
        })
    }
}

navLinks.addEventListener("click", (e) => {
    console.log(e.target)
})


// body.addEventListener("click", (e) => {
//     if(e.target.classList.contains("nav-bar") || e.target.parentElement.classList.contains("nav-bar") || e.target.classList.contains("nav-links") || e.target.parentElement.classList.contains("nav-links") || e.target.classList.contains("burger-container") || e.target.parentElement.classList.contains("burger-container")){
//         console.log("yes")
//     }
//     // console.log(e.target.parentElement.classList)
// })

// console.log("y


