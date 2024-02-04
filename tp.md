# TP Accessibilité

## Prise en main de l'application

- Cloner le projet et lancer `npm i` puis `npm start`
- Aller sur `http://localhost:5173`

L'application est une simple todo list.

## Rendre l'application plus accessible

### Contraste

Utiliser l'outil de mesure du contraste du navigateur pour détecter des contrastes insuffisants.

Modifier les couleurs si nécessaire afin d'obtenir au minimum la note AA.

### Focus

Essayer d'utiliser l'application uniquement avec le clavier.

1. Modifier le CSS sur les éléments interactifs quand l'état est `:focus` afin d'avoir un visuel facile à suivre. Vous pouvez utiliser le sélecteur `*:focus` et y appliquer un `outline` d'au moins 3px.
1. On ne peut actuellement pas focus les boutons `Edit` ou `Cancel`. Étudier ce qui bloque et corriger le problème.
1. Le bouton `Delete` est bien focusable, mais on ne peut pas l'activer avec le clavier. Étudier ce qui bloque et corriger le problème.

### Arbre d'accessibilité

Afficher l'arbre d'accessibilité dans les DevTools du navigateur.

1. Donner un nom accessible à l'élément ayant le rôle `form`. ([?](https://www.w3.org/TR/wai-aria-practices/#aria_lh_form))
1. Lire [ici](https://www.w3.org/TR/wai-aria-practices/#button) l'introduction sur les différents types de boutons. Identifier dans l'interface les boutons pouvant être considérés comme des `toggle button`. Faire les modifications nécessaires.
1. Les boutons All / Active / Completed manquent de contexte. Faire en sorte que le nom accessible de ces boutons soit plus précis pour donner du contexte aux utilisateurs. Par exemple `Show all tasks`.

TIP:

- Il existe une classe CSS `visually-hidden` qui permet de masquer un élément visuellement, tout en restant visible dans l'arbre d'accessibilité.

BONUS:

- Essayer d'utiliser l'application avec `VoiceOver` (mac) ou le Narrateur (Windows).

# TP Tests

Le but de ce TP est d'écrire des tests d'intégration au niveau de l'application globale.

## Lancement du test

1. Lancer la commander `npm test --watch` dans la console pour lancer les tests. Le paramètre watch permet de relancer les tests à chaque fichier modifié.
1. Dans le fichier `App.spec.js`, compléter les différents tests.
1. Générer le rapport de couverture de tests avec la commande `npm test --coverage`. Ouvrir dans le navigateur le fichier généré `./coverage/lcov-report/index.html`.

Pour toutes les sélections, privilégier les requêtes par rôle.

Tips:

- Pour sélectionner un noeud à partir de son rôle (où "button" est le **rôle** du composant et `name` le nom accessible du composant).

```js
screen.getByRole("button", { name: "Nom du bouton" });
```

- Pour connaître les différents rôles disponibles dans un composant rendu, utiliser [logRoles](https://testing-library.com/docs/dom-testing-library/api-accessibility/#logroles)

```js
import { logRoles } from '@testing-library/dom'

const { container } = render(...)
logRoles(container);
```

Documentation utiles:

- [user-event](https://testing-library.com/docs/user-event/intro)
- [RTL query priority](https://testing-library.com/docs/queries/about#priority)
- [jest-dom](https://github.com/testing-library/jest-dom)
- [Roles sur la MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [WAI-ARIA authoring practises](https://www.w3.org/TR/wai-aria-practices/)
