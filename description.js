// Sélection des boutons
const bouton1 = document.querySelector("#bouton1");
const bouton2 = document.querySelector("#bouton2");
const bouton3 = document.querySelector("#bouton3");
const bouton4 = document.querySelector("#bouton4");

// Sélection des descriptions
const description1 = document.querySelector("#description1");
const description2 = document.querySelector("#description2");
const description3 = document.querySelector("#description3");
const description4 = document.querySelector("#description4");

// Sélection des boutons fermer
const fermer1 = document.querySelector("#fermer1");
const fermer2 = document.querySelector("#fermer2");
const fermer3 = document.querySelector("#fermer3");
const fermer4 = document.querySelector("#fermer4");

// Bouton pour remonter en haut
const btnHaut = document.querySelector("#btnHaut");

// Masquer toutes les descriptions au départ
[description1, description2, description3, description4].forEach(desc => {
  if (desc) desc.style.display = "none";
});

// Fonction pour toggle l'affichage d'une description
function toggleDescription(description) {
  if (!description) return;

  // Fermer les autres descriptions
  [description1, description2, description3, description4].forEach(desc => {
    if (desc && desc !== description) desc.style.display = "none";
  });

  // Affichage + scroll fluide
  if (description.style.display === "block") {
    description.style.display = "none";
  } else {
    description.style.display = "block";
    setTimeout(() => {
      description.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50); // petit délai pour que le bloc ait le temps d'apparaître
  }
}

// Ajout des événements aux boutons
bouton1?.addEventListener("click", () => toggleDescription(description1));
bouton2?.addEventListener("click", () => toggleDescription(description2));
bouton3?.addEventListener("click", () => toggleDescription(description3));
bouton4?.addEventListener("click", () => toggleDescription(description4));

// Fermeture des descriptions avec les boutons fermer
fermer1?.addEventListener("click", () => { if(description1) description1.style.display = "none"; });
fermer2?.addEventListener("click", () => { if(description2) description2.style.display = "none"; });
fermer3?.addEventListener("click", () => { if(description3) description3.style.display = "none"; });
fermer4?.addEventListener("click", () => { if(description4) description4.style.display = "none"; });

// Bouton pour remonter en haut de la page
btnHaut?.addEventListener("click", () => {
  // Ajouter l'animation
  btnHaut.classList.add("spin-animation");

  // Scroll vers le haut avec smooth
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // Enlever la classe après l'animation (600ms)
  setTimeout(() => {
    btnHaut.classList.remove("spin-animation");
  }, 600);
});
