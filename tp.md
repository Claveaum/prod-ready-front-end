# TP Accessibilité

## Prise en main de l'application

- Cloner le projet et lancer `npm i` puis `npm start`
- Aller sur `http://localhost:3000`

L'application est une simple todo list.

## Rendre l'application plus accessible

### Contraste

Utiliser l'outil de mesure du contraste du navigateur pour détecter des contrastes insuffisants.

Modifier les couleurs si nécessaire afin d'obtenir au minimum la note AA.

### Focus

Essayer d'utiliser l'application uniquement avec le clavier.

1. Modifier le CSS sur les éléments interactifs quand l'état est `:focus` afin d'avoir un visuel facile à suivre.
1. On ne peut actuellement pas focus les boutons `Edit` ou `Cancel`. Étudier ce qui bloque et corriger le problème.
1. Le bouton `Delete` est bien focusable, mais on ne peut pas l'activer avec le clavier. Étudier ce qui bloque et corriger le problème.

### Arbre d'accessibilité

Afficher l'arbre d'accessibilité dans les DevTools du navigateur.

1. Donner un nom accessible à l'élément ayant le rôle `form`. ([?](https://www.w3.org/TR/wai-aria-practices/#aria_lh_form))
1. Les boutons All / Active / Completed manquent de contexte. Faire en sorte que le nom accessible de ces boutons soit plus précis pour donner du contexte aux utilisateurs. Par exemple `Show all tasks`.

TIP:

- Il existe une classe CSS `visually-hidden` qui permet de masquer un élément visuellement, tout en restant visible dans l'arbre d'accessibilité.

BONUS:

- Essayer d'utiliser l'application avec `VoiceOver` (mac) ou le Narrateur (Windows).
