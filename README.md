# L'Emprunthèque

Classement des livres les plus empruntés au rayon adulte des bibliothèques de Paris (2022), récupérés en direct depuis l'API OpenData de la Ville de Paris.

## Fonctionnalités

- Récupération des données via l'**API OpenData Paris** (fetch + async/await)
- Liste **classée** par nombre de prêts (top 39)
- **Détails dépliables** par livre (prêts, exemplaires, prêts totaux)
- Bouton **« Voir la suite »** (10 livres affichés, puis le reste au clic)

## Techs

- HTML / CSS
- JavaScript vanilla 
- [Vite](https://vitejs.dev/) comme outil de build

## Lancer le projet

npm run dev

Puis ouvrir l'adresse indiquée (par défaut `http://localhost:5173`).

## Source des données

[Les titres les plus prêtés — Paris OpenData](https://opendata.paris.fr/explore/dataset/les-titres-les-plus-pretes/)

## Crédits

- Icônes livres : [Batuhan Karagöl](https://andelrodis.itch.io/books-for-32x32)
- Icône étagère : [Andy — Sparks & Pixels](https://sparksandpixels.itch.io/indoor-library-assetpack)
