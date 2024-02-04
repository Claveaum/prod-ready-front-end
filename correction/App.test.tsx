import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const INITIAL_DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
];

describe("TodoApp", () => {
    test("I should be able to add a Todo", async () => {
        render(<App tasksInit={[]} />);

        const todoInput = screen.getByRole("textbox", {
            name: "What needs to be done?",
        });

        await userEvent.type(todoInput, "Write an integration test");

        const submitButton = screen.getByRole("button", { name: "Add" });

        await userEvent.click(submitButton);

        // Input should have been reset
        expect(todoInput).toHaveValue("");

        const testTodoCheckbox = screen.getByRole("checkbox", {
            name: "Write an integration test",
        });
        expect(testTodoCheckbox).toBeVisible();
        expect(testTodoCheckbox).not.toBeChecked();

        await userEvent.click(testTodoCheckbox);

        expect(testTodoCheckbox).toBeChecked();
    });

    test("I should be able to delete a Todo", async () => {
        render(<App tasksInit={INITIAL_DATA} />);

        expect(
            screen.getByRole("heading", { level: 2, name: /tasks remaining$/ })
        ).toHaveTextContent("3 tasks remaining");

        const testTodoCheckbox = screen.getByRole("checkbox", {
            name: "Eat",
        });
        expect(testTodoCheckbox).toBeVisible();

        // Click on delete button
        const deleteBtn = screen.getByRole("button", { name: "Delete Eat" });
        await userEvent.click(deleteBtn);

        // Verify checkbox disappearance
        expect(
            screen.queryByRole("checkbox", {
                name: "Eat",
            })
        ).toBeNull();

        expect(
            screen.getByRole("heading", { level: 2, name: /tasks remaining$/ })
        ).toHaveTextContent("2 tasks remaining");
    });

    test("I should be able to edit a Todo", async () => {
        render(<App tasksInit={INITIAL_DATA} />);

        // Focuc edit and activate it with enter
        const editBtn = screen.getByRole("button", { name: "Edit Eat" });
        editBtn.focus();
        await userEvent.keyboard("[Enter]");

        // Check newly created input got the focus
        const newNameInput = screen.getByRole("textbox", {
            name: "New name for Eat",
        });
        expect(newNameInput).toHaveFocus();

        await userEvent.clear(newNameInput);
        expect(newNameInput).toHaveValue("");
        await userEvent.type(newNameInput, "Write an integration test");

        // Save
        await userEvent.click(
            screen.getByRole("button", { name: "Save new name for Eat" })
        );

        const testTodoCheckbox = screen.getByRole("checkbox", {
            name: "Write an integration test",
        });
        expect(testTodoCheckbox).toBeVisible();

        expect(
            screen.queryByRole("checkbox", {
                name: "Eat",
            })
        ).toBeNull();
    });
});
