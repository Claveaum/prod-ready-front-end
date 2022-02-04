/* eslint-env jest */
import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const INITIAL_DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

describe("TodoApp", () => {
  test("I should be able to add a Todo", () => {
    render(<App tasks={[]} />);

    const todoInput = screen.getByRole("textbox", {
      name: "What needs to be done?",
    });

    userEvent.type(todoInput, "Write an integration test");

    const submitButton = screen.getByRole("button", { name: "Add" });

    userEvent.click(submitButton);

    // Input should have been reset
    expect(todoInput).toHaveValue("");

    const testTodoCheckbox = screen.getByRole("checkbox", {
      name: "Write an integration test",
    });
    expect(testTodoCheckbox).toBeVisible();
    expect(testTodoCheckbox).not.toBeChecked();

    userEvent.click(testTodoCheckbox);

    expect(testTodoCheckbox).toBeChecked();
  });

  test("I should be able to delete a Todo", () => {
    render(<App tasks={INITIAL_DATA} />);

    expect(
      screen.getByRole("heading", { level: 2, name: /tasks remaining$/ })
    ).toHaveTextContent("3 tasks remaining");

    const testTodoCheckbox = screen.getByRole("checkbox", {
      name: "Eat",
    });
    expect(testTodoCheckbox).toBeVisible();

    // Click on delete button
    const deleteBtn = screen.getByRole("button", { name: "Delete Eat" });
    userEvent.click(deleteBtn);

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

  test("I should be able to edit a Todo", () => {
    render(<App tasks={INITIAL_DATA} />);

    // Focuc edit and activate it with enter
    const editBtn = screen.getByRole("button", { name: "Edit Eat" });
    editBtn.focus();
    userEvent.keyboard("[Enter]");

    // Check newly created input got the focus
    const newNameInput = screen.getByRole("textbox", {
      name: "New name for Eat",
    });
    expect(newNameInput).toHaveFocus();

    userEvent.clear(newNameInput);
    expect(newNameInput).toHaveValue("");
    userEvent.type(newNameInput, "Write an integration test");

    // Save
    userEvent.click(
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
