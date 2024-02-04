<!-- prettier-ignore-start -->
# Tests frontend


## Pourquoi écrire des tests ?

Note:
- Parce que c'est une "bonne pratique"
- Parce que mon manager/lead dev me le demande
- Parce que je suis objectivé sur le taux de couverture
- Parce que ça va faciliter les futures modifications (maintenance/évolution/refactorisation)
- Parce que ça documente ce que mon code doit faire
- Parce que ça augmente ma confiance dans le code que je livre en production


## Quels tests écrire ?

L'écriture d'un test est un investissement, il doit avoir un ROI.

<img class="r-stretch" src="data/img/test-pyramid.png" />


### ROI des différents types de tests

<img class="r-stretch" src="data/img/testing-trophy.jpg" />


### ROI des différents types de tests

<img class="r-stretch" src="data/img/confidence-coefficient.webp" />

Note:
- Vers le haut du graphe plus de coûts et tests plus lents
- On capte des petits problèmes en bas et des problèmes complexes en haut


### Analyse statique

- Détecter des erreurs possibles pendant la frappe
- Inciter les développeurs à se poser les bonnes questions
- Enforcer une uniformité des pratiques
- Diminue la charge de travail lors des revues de code


### Tests unitaires

- À faire sur les couches de service et les composants réutilisables
- Peut servir de spécification du comportement attendu
- Permet de tester facilement tous les chemins de code
- Rend difficile les refactorisations
- Sera probablement à réécrire/modifier à chaque modification du code


### Tests d'intégration

- À faire au niveau de la fonctionnalité
- On teste le comportement
- Meilleur ROI parmi les types de test


### Tests E2E

- Permet de capter des erreurs issues de l'extérieur (par exemple serveur backend)
- À faire au niveau du parcours
- Nécessite un environnement complet et fonctionnel pour tourner


### Autres types de test

- Tests de non-régression visuelle
- Monitoring de parcours en production


### Alors, on fait quoi ?

- On combine les différents modes de test
- On adapte le niveau de détail du test
- On fait des **compromis**


### Outils

- Statique : ESLint + Typescript
- Unitaires : Jest / Vitest
- Intégration : Jest / Vitest + *-testing-library
- E2E : Playwright / Cypress


### Quelle démarche pour des tests frontend plus efficace ?

- Détecter plus d’erreurs, AKA **"faux négatifs"**
- Ne pas échouer pour de mauvaises raisons, AKA **"faux positifs"**
- Faciliter la maintenance, l'écriture
- Moins de tests, mais mieux tester en priorisant les éléments importants
- Encourager des bonnes pratiques de développement


### Exercice : CE TEST DOIT-IL ÉCHOUER ?

- Déterminer si le test déjà existant doit échouer.
- S’il échoue, doit-il être mis à jour en même temps que la modification du code.
On ne traite ici que des tests unitaires lancés avec Vitest/Jest dans JSDOM.


### Exercice 1

Un composant commence à devenir trop volumineux et difficile à maintenir.

Je le sépare donc en plusieurs sous-composants pour le rendre plus maintenable, tout en ne réalisant aucuns changements quant à son fonctionnement.


### Exercice 2

```typescript
const getUser = (idUser:string, users: Array<User>) => {
    const data = users.find((user) => user.id === idUser)
    return (...)
}
```

```typescript
const getUser = (idUser:string, users: Array<User>) => {
    const userCourant = users.find((user) => user.id === idUser)
    return (...)
}
```


### Exercice 3

```typescript
const getUser = (idUser:string, users: Array<User>) => {
    const userCourant = users.find((user) => user.id === idUser)
    return (...)
}
```

```typescript
const getUser = (idUser:string, users: Array<User>) => {
    const userCourant = useMemo(() => 
        users.find((user) => user.id === idUser),
        [idUser, users])
    return (...)
}
```


### Exercice 4

```jsx
<button type="button" className="suppression-bouton">
    Supprimer
</button>
```

```jsx
<button type="button" className="delete-button">
    Supprimer
</button>
```


### Exercice 5

```jsx
<span role="heading" aria-level="1">
    Titre de niveau 1
</span>
```

```jsx
<h1>
    Titre de niveau 1
</h1>
```


### Exercice 6

```jsx
<div role="button" onClick={onClick}>
    Supprimer le devis
</div>
```

```jsx
<button type="button" onClick={onClick}>
    Supprimer le devis
</button>
```


### Exercice 7

```jsx
<button type="button" onClick={onClick}>
    Supprimer le devis
</button>
```

```jsx
<button type="button" onClick={onClick}>
    Supprimer
</button>
```


### Exercice 8

```jsx
<button type="button" onClick={onClick}>
    Supprimer le devis
</button>
```

```jsx
<button type="button" onClick={onClick}>
    <i role="presentation" className="fa fa-delete" />
    Supprimer le devis
</button>
```


### Exercice 9

```typescript
const [contrats, setContrats] = useState([])

useEffect(() => {
    const getContrats = async () => {
        const { data } = await axios('api/contrats')
        setContrats(data)
    }
    getContrats()
}, [])
```

```typescript
const [contrats, setContrats] = useState([])

useEffect(() => {
    const getContrats = async () => {
        const response = await fetch('api/contrats')
        const data = await response.json()
        setContrats(data)
    }
    getContrats()
}, [])
```


### Ce test doit-il échouer ? Conclusion

- Il échoue avec un changement sur une fonctionnalité
- Il ne doit pas échouer sur un détail d'implémentation

> Pour s'aider, on prend la vision de l'utilisateur


### Un utilisateur, c'est qui ?

- Selon le cas, l’utilisateur peut désigner :
    - L’utilisateur d’un composant (le développeur)
    - L’utilisateur final
    - Les deux à la fois


### Qu’est-ce qu’un détail d’implémentation ?
> Un détail d’implémentation est un élément que nos utilisateurs n’ont pas besoin d’utiliser, de voir ou de savoir


### Exemples de détails d'implémentations

- **Ce sont des détails d’implémentation**
  - Nom d’une variable locale
  - État interne d’un composant
  - Méthode utilisée pour faire des requêtes réseau
  - Nom des classes CSS
- **Ce ne sont pas des détails d’implémentation**
  - Texte affiché pour l’utilisateur
  - Paramètres d’entrée du composant testé
  - Rôles appliqués aux éléments (sémantique HTML)


### Comment faire ? Version non recommandée

- Tester unitairement chaque composant en mockant ses enfants et ses autres dépendances
  - Faire des assertions sur l’état du composant
  - Faire une snapshot du rendu du composant
- Tester unitaire chaque couche en mockant ses dépendances
  - Tester la couche de service en mockant fetch
  - Tester la couche de sélecteurs en mockant l’état


### Comment faire ? Version recommandée

- Tester un composant comme un widget complet en mockant uniquement les entrées / sorties
- Faire des sélections par rôle
- Manipuler le composant comme un utilisateur final
- Mocker au niveau de la requête réseau
- Faire des assertions sur ce qui est visible uniquement
- Les autres couches sont testées par effet de bord
- Tests unitaires plus ciblés sur les autres couches quand nécessaire


### Quelques exemples dans la pratique

- Faire ses rendus de composants avec react-testing-library
- Faire ses sélections avec "testing-library" en privilégiant les requêtes par rôle
- Manipuler les éléments DOM rendus avec "user-event"
- Faire des assertions sur ce qui est visible pour l’utilisateur avec jest-dom
- Mocker les requêtes réseau avec msw


### Exemple MSW

```typescript
import { beforeAll, afterEach, afterAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const handler = http.get(
        '/heroes',
        ({ request, params, cookies }) => {
          return HttpResponse.json(['Batman', 'Spiderman'])
        },
)
export const server = setupServer(handler)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```


### RENDU D’UN COMPOSANT - Astuce
- Créer une fonction de rendu avec des défauts cohérents surchargeables
- Le wrapper inclut les providers utiles (Router, ReactQuery, Context, etc...)

```tsx
const renderHero = (
    { heroName = "Batman", heroPower = "wealthy" }
            : HeroRenderTestProps) => {
    return render(
    <Router>
      <HeroProvider>
        <Hero heroName={heroName} heroPower={heroPower} />
      </HeroProvider>
    </Router>)
}
```


### Exemple de test UI

```tsx
import {screen} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

describe('hero test suite', () => {
  test('hero test selection', async () => {
    renderHero()
    const heroButton = await screen.findByRole('button', {name: "Select Hero"})
    expect(heroButton).toBeVisible()
    await userEvent.click(heroButton)
    const submitButton = await screen.findByRole('button', {name: "Valide ton choix de héros"})
    expect(submitButton).toBeVisible()
  })
})
```


### Quelques liens utiles

- https://kentcdodds.com/blog/testing-implementation-details
- https://kentcdodds.com/blog/stop-mocking-fetch
- https://testing-library.com/docs/guiding-principles/
- [Queries testing library](https://testing-library.com/docs/queries/about#priority)
- https://mswjs.io/docs/
<!-- prettier-ignore-end -->