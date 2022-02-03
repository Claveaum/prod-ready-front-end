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
  <li>Utilisation de variables d'environnements</li>
  <li>Fichiers de configurations</li>
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


### Définition

Faire en sorte que nos applications soient utilisables par **tout le monde**


### Applications inclusives pour qui ?

- Utilisateurs avec des technologies d'assistance (lecteurs d'écran, loupes...)
- Utilisateurs avec des handicaps (déficiences, incapacités, désavantages)


### La notion de handicap dépend du contexte

Ce n'est pas une caractéristique personnelle

C'est un phénomène complexe, qui reflète les interactions entre une personne et la société qui l'entoure


### Les déficiences peuvent être invisibles

Par exemple:
- Troubles dys
- Daltonisme


### Le handicap est situationnel

Exemples:

- Blessures
- Environnement lumineux ou bruyant
- Déphasage culturel (langue, âge...)
- Bébé dans les bras


### Exemple de déphasage culturel

<img class="r-stretch" src="data/img/floppyDisk.jpeg" />


### Le handicap crée l'exclusion

L'exclusion apparaît quand les interactions sont incompatibles

C'est notre responsabilité de comprendre comment nos outils peuvent créer des difficultés d'interaction


### Une autre bonne raison

C'est une obligation légale depuis 2005 pour:
- Services publics
- Entreprises privées délégataires de missions de service public
- Entreprises privées avec CA > 250 millions €


### Normes

- WAI-ARIA (W3C)
- RGAA (gouvernement FR)


### De la conception à la réalisation

- Wording
    - Éviter le vocabulaire jargonneux
- Design
    - Couleurs contrastées
    - L'information ne doit pas passer uniquement par la couleur
    - Tailles et marges suffisants


### Le modèle de rôles HTML

Sur ppt.


### Documents utiles

- [WAI-ARIA authoring practises](https://www.w3.org/TR/wai-aria-practices/#intro)
- [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [Microsoft Inclusive Design](https://www.microsoft.com/design/inclusive)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/info-examples/web/aria-roles/)
- [RGAA (FR)](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [Liste de ressources](https://github.com/brunopulis/awesome-a11y)


## Maintenir une application dans le temps
<img class="r-stretch" src="data/img/maintainability.jpeg">

Note:
- Stratégie pour maintenir à jour sa base de code et ses dépendances
- Stratégie de sécurité : dependabot
- Décommissioner > désactiver


## Gestion de la documentation
<img class="r-stretch" src="data/img/documentation.jpeg">

Note:
- Spécification versionnée avec la base de code
- Documentation technique : jsdoc, typescript ?
- Changelog

<!-- prettier-ignore-end -->
