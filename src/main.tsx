import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {Task} from './App.tsx'
import './index.css'

const DATA : Array<Task> = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App tasksInit={DATA} />
  </React.StrictMode>,
)
