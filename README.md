# Covid-21

# SearchBar
La search bar permet d'afficher un nombre limiter de pays. Si il n'y a aucune donnée renseigner dans la search bar alors tous les pays sont affichés. De plus, le nombre de pays affiché varie sur le graphique.

# Tableau
Le Tableau indique le nom du pays, le nombre de cas déclarés, le nombre total de décès et son PIB en dollars. Pour chaque champs, il est possible de les classer par ordre croissant ou décroissant en cliquant sur les flèches. Dans la colonne PIB, il est parfois écrit "Introuvable", c'est que le jeux de donnée de l'api ne renvoie aucune information sur le PIB du pays en question.

# Graphique
Le graphique informe du nombre de cas du Covid-19 en fonction du PIB de chaque pays.

# Tests
Pour les tests, vous trouverez dans le dossier *__tests__* 3 phases de test réalisé sur des fonctions différentes de l'application.

# Commandes pour les tests

```bash
# Pour lancer tous les tests
$bash : npm run allTest
```

```bash
# Pour lancer les tests sur les requests
$bash : npm run testRequest
```

```bash
# Pour lancer les tests utilitaire
$bash : npm run testUtilitaires
```

```bash
# Pour lancer les tests sur le tableau
$bash : npm run testTableau
```

# Commande de build

```bash
$bash : npm run build
```

# Commande pour lancer le serveur
Si vous voulez essayer vous pouvez démarrer le serveur avec la commande :

```bash
$bash : npm run dev
```

Si cela ne marche pas, durant la phase de développement nous avons utilisé l'extension *Live server* sur *VScode*.

