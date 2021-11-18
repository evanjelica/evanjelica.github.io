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
    Show active page
-------------------------------------------------------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //Turns on overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
    else{
        hideSection();
        document.body.classList.add("hide-scrolling");

    }
    setTimeout(()=>{
        document.querySelector("section.active").classList.remove("active","fade-out");
        document.querySelector(e.target.hash).classList.add("active");
        window.scrollTo(0,0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
    },500);
    }
});

/*------------------------------------------------------------
    Switch about tabs
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

/*------------------------------------------------------------
    Dark Mode
-------------------------------------------------------------*/
let theme =localStorage.getItem('theme')
if(theme == null){
    setTheme('default')
}
else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-button')

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('clicked: ', mode)

        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'default'){
        document.getElementById('theme-style').href = './css/index.css'
    }
    if(mode == 'darkmode'){
        document.getElementById('theme-style').href = './css/darkmode.css'
    }
 

    localStorage.setItem('theme', mode)
}