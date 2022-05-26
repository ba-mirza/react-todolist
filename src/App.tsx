import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

export interface Todos {
    id: number,
    title: string,
    checked?: boolean,
}

function App() {
    const text: string = 'Enter your text';

    const todo: Todos[] = [
        {id: 1, title: 'Learn Redux Toolkit', checked: true},
        {id: 2, title: 'Learn NGRX', checked: false},
        {id: 3, title: 'Learn NestJS', checked: false}
    ];

    return (
        <div className="App">
            <TodoList title={text}/>
        </div>
    );
}

export default App;
