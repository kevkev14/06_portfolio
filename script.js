/* ---------------------------------------- NAVIGATION BAR / BURGERMENU SEKTION ---------------------------------------- */
//Gør så at når man klikker på burgerbar knappen at siden fader væk med keyframes i CSS
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
//Gør så når at en sektioner bliver gemt væk at den får css reglen "fade out" så den får en seamless effekt
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
//Gør så navbar bliver togglet med active
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/* ---------------------------------------- ACTIVE FOR ALLE FANER SEKTION ---------------------------------------- */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    //Tænder for et overlay så man ikke kan trykke flere gange
    document.querySelector(".overlay").classList.add("active");
    //Gør så menu popper frem og man kan vælge en af de 4 sider
    //Stopper samtidig muligheden for at kunne scroll
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    //Gør at den sektion som bliver trykket på forsvinder ved at fjerne active tagget
    //Og bagefter giver et nyt active tag til en af de andre sider
    // Det gør at den tidligere som som var åben bliver lukket og en ny popper frem
    setTimeout(() => {
      document.querySelector("section.active").classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      //Overlay blive removet igen efter alt er gået igennem
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

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
