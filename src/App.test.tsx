import { render } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import App from "./App";

const INITIAL_DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
];

describe("TodoApp", () => {
    test("I should be able to add a Todo", async () => {
        render(<App tasksInit={[]} />);

        // Test à compléter
        // 1. Sélectionner le champ input en utilisant `getByRole`
        // 2. Remplir ce champ avec une valeur
        // 3. Sélectionner le bouton de soumission du formulaire
        // 4. Faire un clic sur ce bouton
        // 5. Faire une assertion pour valider que le champ a bien été réinitialiser
        // 6. Sélectionner la checkbox correspondant à la tâche créée
        // 7. Faire une assertion pour valider qu'elle est visible
        // 8. Faire une assertion pour valider qu'elle n'est pas cochée
        // 9. Cliquer sur la checkbox
        // 10. Faire une assertion pour valider que la checkbox est maintenant cochée
    });

    test("I should be able to delete a Todo", async () => {
        render(<App tasksInit={INITIAL_DATA} />);

        // Test à compléter
        // 1. Faire un rendu avec les valeurs par défaut contenues dans INITIAL_DATA
        // 2. Valider qu'il existe un titre de niveau 2 contenant le texte `3 tasks remaining`
        // 3. Sélectionner la checkbox correspondant à une tâche et vérifier qu'elle est bien visible
        // 4. Sélectionner le bouton de suppression de la tâche et cliquer dessus
        // 5. Valider que la checkbox correspondante n'existe plus
        // 6. Valider que le titre de niveau est bien à jour et contient maintenant le texte `2 tasks remaining`
    });

    test("I should be able to edit a Todo", async () => {
        render(<App tasksInit={INITIAL_DATA} />);

        // Test à compléter
        // 1. Faire un rendu avec les valeurs par défaut contenues dans INITIAL_DATA
        // 2. Sélectionner le bouton d'édition d'une tâche
        // 3. Effectuer manuellement un focus sur ce bouton
        // 4. Simuler l'appui sur la touche `Entrée` (avec userEvent).
        // 5. Sélectionner le champ `input` nouvellement créé
        // 6. Vérifier que ce champ pris automatiquement le focus (avec `expect().toHaveFocus()`)
        // 7. Vider le champ (avec userEvent.clear() ou en simulant une interaction clavier)
        // 8. Remplir le champ avec une nouvelle valeur
        // 9. Cliquer sur le bouton d'enregistrement du formulaire
        // 10. Faire des assertions pour valider que la valeur est correctement à jour dans l'interface
    });
});
