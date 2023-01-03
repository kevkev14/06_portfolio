/* ---------------------------------------- ABOUT TABS ---------------------------------------- */
const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

//Hver section på "experience" og "education" bliver byttet rundt med active tag når man klikker på den ene eller den anden
//Den tager den ene attribute og skifter ud med den eksisterende for at kunne gøre den anden aktiv
tabsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

/* ---------------------------------------- PORTFOLIO "ITEM DETAIL" SEKTION ---------------------------------------- */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    //Når portfolio kommer frem starter siden på det den var før
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});
//Denne funktion gør så "kortet" bliver vist når man klikker på "view project"
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

//Når man klikker på krydset kommer portfolio siden frem igen
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// Gør popup usynlig når man klikker uden for boksen
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

//DENNE NEDEN UNDER GØR SÅ DET KORT DER BLIVER VIST PÅ SKÆRMEN SKIFTER TIL DEN RIGTIGE VED TRYK PÅ KNAP
//FØR VISTE DEN KUN DET SAMME PORTFOLIO KORT PÅ HVER KNAP
//DET PROJECT SOM BLIVER KLIKKET PÅ VISER DET TILSVARENDE PROJEKT PÅ SKÆRMEN
function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
