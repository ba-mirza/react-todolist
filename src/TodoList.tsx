import React from "react";
import { FilterValuesType } from "./App";

type Todo = {
    id: number,
    title: string,
    checked: boolean,
}

type propsType = {
    todos: Todo[],
    text?: string,
    removeTodo: (id: number) => void,
    changeFilter: (value: FilterValuesType) => void
}

export const TodoList: React.FC<any> = (props: propsType) => {

    return (
        <div>
            <div>
                <h1>{props.text}</h1>
                <input type="text"/>
                <button>add</button>
            </div>
            <ul>
                {
                    props.todos.map((todo) => (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.checked}/>
                            <span>{todo.title}</span>
                            <button onClick={() => {props.removeTodo(todo.id)}}>x</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => props.changeFilter("All")}>All</button>
            <button onClick={() => props.changeFilter("Active")}>Active</button>
            <button onClick={() => props.changeFilter("Completed")}>Completed</button>
        </div>
    );
}