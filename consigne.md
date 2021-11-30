# COVID-19

Le but de cet exercice est de réaliser une page HTML affichant des statistiques simples sur la pandémie de COVID-19, par pays.

## Fonctionnalités

La page devra ressembler à l'image suivante:

![](ui-covid-final.jpg)

### Tableau de données

* Le champ `Nb de pays` est un champ numérique permettant à l'utilisateur de choisir le nombre de pays à afficher dans le tableau
* Le tableau contient les colonnes suivantes:
  * le drapeau officiel du pays,
  * le nom du pays,
  * le nombre total de cas déclarés,
  * le nombre total de décès,
  * le PIB par habitant ;
* Le nombre de lignes affichées en plus de _l'en-tête_ des colonnes doit être égal au nombre saisi par l'utiliateur dans le champ `Nb de pays` ;
* Les colonnes `Total des cas`, `Décès` et `PIB/hab` peuvent être triées par ordre croissant ou décroissant ;
* Les données affichées doivent être mises à jour à chaque action de l'utilisateur (modification du nombre de pays et de l'ordre de tri).

### Graphique

À côté du tableau des données, et synchronisé avec celui-ci, est affiché un graphique en deux dimensions positionnant chaque pays sélectionné sur deux axes:

* le nombre de cas total ;
* le PIB par habitant.

On affichera au choix le nom du pays ou le drapeau, ou les deux.

## Précisions

### API utilisées

Le choix des API à utiliser est libre mais on privilégiera les APIs suivantes:

* Pour l'affichage du graphique, on pourra utiliser l'API Googlecharts: https://developers.google.com/chart/interactive/docs/gallery/scatterchart
* Pour la récupération des données sur la Covid-19 : https://covid19api.com/ ([Documentation](https://documenter.getpostman.com/view/10808728/SzS8rjbc#e831c268-9da1-4d86-8b5a-8d7f61910af8)) ;
* Pour la récupération du PIB/habitant : https://stats.oecd.org (cette URL permet de récupérer les données pour la France et l'Allemagne: https://stats.oecd.org:443/SDMX-JSON/data/SNA_TABLE1/FRA+DEU.B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions).

*Note*: pour récupérer les PIB par habitant, il faut passer en paramètre les codes ISO à _3 lettres_ des pays dont on souhaite récupérer les données (dans les cas ci-dessus, `FRA+DEU`). Or les données de l'API https://covid19api.com sont exposées par pays avec un code ISO à _2 lettres_. On pourra utiliser par exemple ce tableau de correspondance-ci: http://country.io/iso3.json

### Travail attendu

A minima, la page HTML doit être fonctionnelle selon les spécifications ci-dessus. Une attention particulière devra être portée à :

* la clarté et l'organisation du code : éviter de tout mettre dans une seule fonction, séparer les différentes fonctionnalités, séparer le code d'affichage, du code de requête, du code manipulant les données ;
* l'écriture de tests unitaires pour les fonctionnalités métiers avec [jest](https://jestjs.io/);
* l'organisation du projet avec [npm](https://www.npmjs.com/).
