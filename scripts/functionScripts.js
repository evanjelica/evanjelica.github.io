/*------------------------------------------------------------
    Toggle Navbar
-------------------------------------------------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*------------------------------------------------------------
    Switch tabs
-------------------------------------------------------------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about");

tabsContainer.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("tab-items") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

/*------------------------------------------------------------
    Portfolio Popup
-------------------------------------------------------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("button-view-project")){
        console.log("it works")
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemsDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".popup-close").addEventListener("click", togglePortfolioPopup);

//hides popup when clicking outside box
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("popup-inner")){
        togglePortfolioPopup()
    }
})

function portfolioItemsDetails(portfolioItems){
    document.querySelector(".popup-thumbnail img").src =
    portfolioItems.querySelector(".portfolio-items-thumbnail img").src;

    document.querySelector(".popup-header h3").innerHTML =
    portfolioItems.querySelector(".portfolio-items-title").innerHTML;

    document.querySelector(".popup-body").innerHTML =
    portfolioItems.querySelector(".portfolio-items-details").innerHTML;
}


