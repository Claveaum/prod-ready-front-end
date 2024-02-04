import {useState, useRef, useEffect, MutableRefObject} from "react";
import Form from "./components/Form.tsx";
import FilterButton from "./components/FilterButton.tsx";
import Todo from "./components/Todo.tsx";
import { nanoid } from "nanoid";

export type Task = {
    id?: string,
    name?: string,
    completed?: boolean
}

export type AppProps = {
    tasksInit: Array<Task>
}


const FILTER_NAMES = ["all", "active", "completed"]
const [ALL, ACTIVE, COMPLETED] = FILTER_NAMES
const taskFilter = (filterName: string) =>  {
    const all = () => true;
    switch (filterName){
        case ALL: return all
        case ACTIVE: return (task: Task) => !task.completed
        case COMPLETED: return (task: Task) => !!task.completed
        default : return all
    }

}

const usePrevious = (length : number) => {
    const ref : MutableRefObject<number> = useRef(0);
    useEffect(() => {
        ref.current = length;
    });
    return ref.current;
}

const App = ({ tasksInit }: AppProps) => {
    const [tasks, setTasks] = useState(tasksInit);
    const [filter, setFilter] = useState("All");

    const toggleTaskCompleted= (id?: string) => {
        const updatedTasks = tasks.map((task: Task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new obkect
                // whose `completed` prop has been inverted
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const deleteTask = (id?: string) => {
        const remainingTasks = tasks.filter((task: Task) => id !== task.id);
        setTasks(remainingTasks);
    }

    const editTask = (id?: string, newName?: string) => {
        const editedTaskList = tasks.map((task: Task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                //
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    const taskList = tasks
        .filter(taskFilter(filter))
        .map((task : Task) => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    function addTask(name: string) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    const listHeadingRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null);
    const prevTaskLength: number = usePrevious(tasks.length);

    useEffect(() => {
        if (tasks.length - prevTaskLength === -1) {
            listHeadingRef?.current?.focus();
        }
    }, [tasks.length, prevTaskLength]);

    return (
        <div className="todoapp stack-large">
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">{filterList}</div>
            <h2 id="list-heading" tabIndex={-1} ref={listHeadingRef}>
                {headingText}
            </h2>
            <ul
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
};

export default App;
