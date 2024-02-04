<!-- prettier-ignore-start -->
# Accessibilité & Front-end


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

***La sémantique html au service de l’accessibilité***


### Définition

>***Sémantique que l’on peut appliquer à des éléments HTML***

- Les éléments ayant des rôles peuvent avoir des états et des propriétés spécifiques.
- Ils peuvent être **implicites** ou **explicites**, **simples** ou **composites**.


### PRINCIPE 1

>***« Un rôle est une promesse »***

Exemple simplifié du rôle button : 
>- Cliquable
>- Focusable
>- Quand il a le focus, activable avec les touches Entrée et Espace
>- A un label accessible
>- Si l’action est inaccessible, le bouton doit être disabled


### PRINCIPE 2
>***« Les rôles peuvent ajouter du comportement, mais peuvent aussi en masquer »***

>Ne pas utiliser à la légère


### POURQUOI ?

- Mets en évidence un besoin plutôt qu'une solution
- Facilite la réutilisabilité des composants
- Aide au respect des standards
- Encourage la création de tests automatisés plus robustes


### RÔLES IMPLICITES ET EXPLICITES

Certaines balises portent des rôles implicitement :
- **`<button>`** a implicitement le rôle **"button"**
- **`<main>`** a implicitement le rôle **"main"**

Toujours privilégier la balise à la définition par attribut :
- **`<button>`** plutôt que **`<div role="button">`**
- **`<main>`** plutôt que **`<div role="main">`**


### COMMENT BIEN IMPLÉMENTER LES RÔLES

- WAI-ARIA authoring practises : https://www.w3.org/TR/wai-aria-practices/
- MDN est très complet aussi : https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles


### LES NOMS ACCESSIBLES
 
- Chaque élément ayant une sémantique doit porter un nom explicite ou implicite.
- Équivalent à ce qui serait lu par un lecteur d’écran


### RÈGLES
- Ce label doit être lisible par des humains
- Pas d’abréviation
- Pas de jargon ou de vocabulaire trop spécifique
- 1 à 3 mots
- La sémantique est portée par le rôle

```
⛔️ <img alt="Image qui représente un canard" />

✅ <img alt="Un canard" />`

⛔️ <button type="button" aria-label="Bouton pour supprimer le devis" /> 

✅ <button type="button" aria-label="Supprimer le devis" />
```


### COMMENT DÉFINIR LE NOM ACCESSIBLE
- Par défaut, c'est le contenu qui est utilisé
- On peut aussi utiliser aria-label, aria-labelledby et title
- Quelques cas spécifiques
  - **`<label>`** pour les champs de formulaire
  - **alt** pour les images
  - **`<caption>`** pour les tables et les figures
  - Guidelines par rôle https://www.w3.org/TR/wai-aria-practices/#naming_role_guidance


### LE RÔLE PRESENTATION
- Ignore explicitement la sémantique associée à un élément


### RÔLE PRESENTATION - Cas d’usages
- Images ou autres éléments uniquement décoratifs
- Suppression de la sémantique d’une **`<table>`** quand elle est utilisée pour la présentation
- Suppression de la sémantique d’un composant individuel dans un widget composite


### RÔLE PRESENTATION - Application par défaut
• S’applique implicitement aux descendants de certains éléments (button, tab, radio...)

Éléments équivalents d’un point de vue sémantique :
```
<li role="tab"><h3>Title of My Tab</h3></li>
<li role="tab"><h3 role="presentation">Title of My Tab</h3></li>
<li role="tab">Title of My Tab</li>
```


### RÔLE PRESENTATION - Conclusion
 
- On a rarement à le définir soi-même
- Souvent considéré comme un code smell car permet de masquer des problèmes d’accessibilité


### Documents utiles

- [WAI-ARIA authoring practises](https://www.w3.org/TR/wai-aria-practices/#intro)
- [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [Microsoft Inclusive Design](https://www.microsoft.com/design/inclusive)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/info-examples/web/aria-roles/)
- [RGAA (FR)](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [Liste de ressources](https://github.com/brunopulis/awesome-a11y)

<!-- prettier-ignore-end -->