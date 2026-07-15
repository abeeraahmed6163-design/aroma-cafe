const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){
            link.classList.add("active");
        }

    });

});

window.addEventListener("resize", function(){

    if(window.innerWidth > 768){

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

    }

});