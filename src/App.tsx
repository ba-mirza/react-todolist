import React, {FC, ReactComponentElement, useState} from 'react';
import './App.css';

export interface Todos {
    title: string,
    checked?: boolean,
}

function App() {

    const text: string = 'Enter your text';

    const todo: Todos[] = [
        {title: 'Learn Redux Toolkit', checked: true},
        {title: 'Learn NGRX', checked: false},
        {title: 'Learn NestJS', checked: false}
    ]

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <TodoList text={text}/>
            <div>
                {
                    todo.map((temp) => (
                        <List title={temp.title} checked={temp.checked} key={temp.title}/>
                    ))
                }
            </div>
        </div>
    );
}

export function TodoList(props: any) {
    const [text, setText] = useState<any>('');

    return (
        <div className={props.text}>
            <h3>{props.text}</h3>
            <h3>{text}</h3>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text"></input>
        </div>
    );
}

export function List(props: any): JSX.Element {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default App;
