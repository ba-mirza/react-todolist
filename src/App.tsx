import React from 'react';
import './App.css';
import { TodoList } from "./TodoList";

export interface Todos {
    id: number,
    title: string,
    checked?: boolean,
}

export type FilterValuesType = "All" | "Completed" | "Active"

function App() {
    const text: string = 'Enter your text';

    const [todos, setTodos] = React.useState<Todos[]>([
        { id: 1, title: 'Learn Redux Toolkit', checked: true },
        { id: 2, title: 'Learn NGRX', checked: false },
        { id: 3, title: 'Learn NestJS', checked: false }
    ]);

    const [filter, setFilter] = React.useState<FilterValuesType>("All");

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }

    let todoForC = todos;
    if (filter === "Active") {
        todoForC = todos.filter((t) => t.checked === false)
    }
    if (filter === "Completed") {
        todoForC = todos.filter((t) => t.checked === true)
    }

    const removeTodo = (id: number) => {
        const res = todos.filter((t) => t.id !== id)
        setTodos(res);
    }

    return (
        <div className="App">
            <TodoList text={text} todos={todoForC} changeFilter={changeFilter} removeTodo={removeTodo} />
        </div>
    );
}

export default App;
