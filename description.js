/* demande au Java script de trouver le id : "bouton"*/
const bouton1 = document.querySelector("#bouton1");
const bouton2 = document.querySelector("#bouton2");
const bouton3 = document.querySelector("#bouton3");
const bouton4= document.querySelector("#bouton4");
/* demande au Java script de trouver le id : "description"*/
const description1 = document.querySelector("#description1");
const description2 = document.querySelector("#description2");
const description3 = document.querySelector("#description3");
const description4 = document.querySelector("#description4");
/* bouton retour vers le haut*/
const btnHaut = document.querySelector("#btnHaut");

description1.style.display = "none";
description2.style.display = "none";
description3.style.display = "none";
description4.style.display = "none";

const btnfermer1 = document.querySelector("#fermer1");
const btnfemrmer2 = document.querySelector("#fermer2");
const btnfermer3 = document.querySelector("#fermer3");
const btnfermer4 = document.querySelector("#fermer4");

/*ajout d'un évènement à bouton*/
bouton1.addEventListener("click", () => {
  if (description1.style.display == "block") {
    description1.style.display = "none";
  } else {
    description1.style.display = "block";
    description1.scrollIntoView({ behavior: "smooth" });
  }
});

bouton2.addEventListener("click", () => {
  if (description2.style.display == "block") {
    description2.style.display = "none";
  } else {
    description2.style.display = "block";
    description2.scrollIntoView({ behavior: "smooth" });
  }
});

bouton3.addEventListener("click", () => {
  if (description3.style.display == "block") {
    description3.style.display = "none";
  } else {
    description3.style.display = "block";
    description3.scrollIntoView({ behavior: "smooth" });
  }
});
bouton4.addEventListener("click", () => {
  if (description4.style.display == "block") {
    description4.style.display = "none";
  } else {
    description4.style.display = "block";
    description4.scrollIntoView({ behavior: "smooth" });
  }
});

fermer1.addEventListener("click", () => {
  description1.style.display = "none";
});
fermer2.addEventListener("click", () => {
  description2.style.display = "none";
});
fermer3.addEventListener("click", () => {
  description3.style.display = "none";
});
fermer4.addEventListener("click", () => {
  description4.style.display = "none";
});


btnHaut.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior:"smooth",
  })
});