# Covid-21
Projet Javascript sur les statistiques du covid 19. <br>

# SearchBar
La search bar permet d'afficher un nombre limiter de pays. Si il n'y a aucune donnée renseigner dans la search bar alors tous les pays sont affichés. De plus le nombre de pays affiché varie sur le graphique.

# Tableau
Le Tableau indique le nom du pays, le nombre de cas déclarés, le nombre total de décès et sont PIB en dollars. Pour chaques champ il est possible de le classé par ordre croissant ou décroissant en cliquant sur les flèches. Dans la colonne PIB il est parfois renseigné Introuvable, c'est que le jeux de donnée de l'api ne renvoie aucune information sur le PIB du pay en question.

# Graphique
Le graphique informe du nombre de cas du covid 19 en fonction du PIB de chaque pay.

# Tests
Pour les tests vous retrouverez dans le dossiers __tests__ 3 phases de test réalisé sur des fonctions différentes de l'application.

## Comande pour les tests

```bash
# Pour lancer tous les tests
npm run allTest
```

```bash
# Pour lancer les tests sur les requests
npm run testRequest
```

```bash
# Pour lancer les tests utilitaire
npm run testUtilitaires
```

```bash
# Pour lancer les tests sur le tableau
npm run testTableau
```

# Commande de build

```bash
npm run build
```

# Commande pour lancer le server
Si vous voulez essayer vous pouvez démarre le server, si cela ne marche pas durant la phase de développement nous avons utilisé l'extension Live server sur VScode.

```bash
npm run dev
```