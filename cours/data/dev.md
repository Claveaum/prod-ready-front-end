<!-- prettier-ignore-start -->
# Dev & Front-end


## Création du livrable


## À quoi sert un bundler ?
<img class="r-stretch" src="data/img/schemaBundler.png">


## Bundler
<img class="r-stretch" src="data/img/logoWebpack.svg">
<p>Webpack</p>


## Bundler
<img class="r-stretch" src="data/img/logoRollup.svg">
<p>Rollup</p>


## Bundler
<img class="r-stretch" src="data/img/logoParcel.png">
<p>Parcel</p>


## Autres étapes appliquée lors de la création du Bundle
<img class="r-stretch" src="data/img/logoBabel.svg">


## Autres étapes appliquée lors de la création du Bundle
<img class="r-stretch" src="data/img/minify.jpeg">


## Et sur différents environnements ?
<ul>
  <li> Utilisation de variables d'environnements</li>
  <li> Fichiers de configurations</li>
</ul>


## Et sur différents environnements ?
<img class="r-stretch" src="data/img/dotenv.png">


## Outils de qualité
<img class="r-stretch" src="data/img/logoPrettier.png">
<p>Formattage de code automatique</p>


## Outils de qualité
<img class="r-stretch" src="data/img/logoEslint.svg">
<p>Linter</p>


## Outils de qualité
<img class="r-stretch" src="data/img/logoSonar.svg">
<p>Quality gate</p>


## Design system
<img class="r-stretch" src="data/img/designSystem.png">

Note:
- Utilité d'un design system dans un contexte d'entreprise
  - Uniformité des interfaces
  - Fédérer les acteurs (UI/UX/DEV/Métier)
- Retrocompatiblité
- Définir le périmètre de ce design system
- Définir la granularité


## Implémentation de la bibliothèque de composants
<img class="r-stretch" src="data/img/buildDesignSystem.jpeg">

Note:
- Concrétisation d'un design system (lib de composants graphiques)
- Besoin de mutualisation de fonctionnalités métier
  - éviter les bugs par différences de compréhension d'un même domaine (ex: regex de validation d'email)
- Difficultés à mettre en oeuvre
  - Maintenance (qui et avec quel budget ?)
  - Favoriser l'adoption
  - Comment gérer les breaking changes
- Comment trouver le juste équilibre entre robustesse et innovation ?


## Accessibilité
<img class="r-stretch" src="data/img/accessibilite.jpeg">

Note:
- Normes: RGAA et WAI-ARIA
- Pourquoi c'est nécessaire de prendre en compte
  - Exclusions de certains utilisateurs
  - Obligations légales


## Maintenance d'une application dans le temps

- Stratégie pour maintenir à jour sa base de code et ses dépendances
- Stratégie de sécurité : dependabot
- Décommissioner > désactiver


## Gestion de la documentation

- Spécification versionnée avec la base de code
- Documentation technique : jsdoc, typescript ?
- Changelog


<!-- prettier-ignore-end -->
