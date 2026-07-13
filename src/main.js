
const app = document.getElementById("app");

const getData = async () => {
  try {
    const data = await fetch(
      "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-titres-les-plus-pretes/records?order_by=prets%20DESC&limit=100&refine=type_de_document%3A%22Livre%20adulte%22",
    );
    const response = await data.json();
    return response.results;
  } catch (error) {
    console.error(error.message);
  }
};


const printData = async () => {
  const resultData = await getData();
  console.log("résultat :", resultData);
  app.innerHTML = ""; // erease everything to be able to put the new boxes

  for (let i = 0; i < resultData.length; i++) {
    const carte = document.createElement("div");
    carte.classList.add("ligne");

    const span = document.createElement("span");
    span.textContent = i + 1;

    const img = document.createElement("img");
    img.classList.add("icone");
    img.src = i % 2 === 0 ? "/livre4.png" : "/livre7.png"; //si i % 2 === 0, alors /livre4.png, sinon /livre7.png".
    img.alt = "icône de livre";

    const section = document.createElement("section");
    section.classList.add("section");

    const titrelivre = document.createElement("h2");
    titrelivre.textContent = resultData[i].titre;
    const titreauteur = document.createElement("h3");
    titreauteur.textContent = resultData[i].auteur;

    section.appendChild(titrelivre);
    section.appendChild(titreauteur);

    const bouton = document.createElement("button");
    bouton.textContent = "⌄";
    bouton.setAttribute("aria-label", "Voir plus");


    // DETAILS SEE MORE BUTTON:
    const details = document.createElement("div")
    details.classList.add("details");

    const p1 = document.createElement("p");
    p1.textContent = `Nombre de prêts en 2022 : ${resultData[i].prets}`;
    const p2 = document.createElement("p");
    p2.textContent = `Nombre d'exemplaires : ${resultData[i].nombre_d_exemplaires}`;
    const p3 = document.createElement("p");
    p3.textContent = `Nombre de prêts total : ${resultData[i].nombre_de_pret_total}`;

    details.appendChild(p1);
    details.appendChild(p2);
    details.appendChild(p3);

    bouton.addEventListener("click", () => {
      carte.classList.toggle("ouvert");
    });

    if (i >= 10) {
      carte.classList.add("cachee")
    }

    carte.appendChild(span);
    carte.appendChild(img);
    carte.appendChild(section);
    carte.appendChild(bouton);
    carte.appendChild(details);
    app.appendChild(carte);

    // When you click, you find all the hidden cards. 
    // Remove the class "cachée" to show all the cards
    // Then I hide the button 
    const boutonSuite = document.getElementById("voir-suite");
    boutonSuite.addEventListener("click", () => {
      const cachees = document.querySelectorAll(".cachee");
      cachees.forEach((carte) => carte.classList.remove("cachee"));
      boutonSuite.style.display = "none";
    });
  };
};

printData();