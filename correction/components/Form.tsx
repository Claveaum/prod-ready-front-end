import {ChangeEvent, FormEvent, useState} from "react";

type FormProps = {
  addTask: (arg0: string) => void
}

const Form = ({ addTask } : FormProps) => {
  const [name, setName] = useState('');


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    addTask(name);
    setName("");
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="gestion de tâches">
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
