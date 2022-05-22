import React, { useState } from 'react';
import './App.css';
import { makeStyles } from "@mui/material";

export interface Todos {
    title: string,
    checked?: boolean,
}

function App() {

    const text: string = 'Enter your text';
    const paragraph: string = 'Lorem ipsum'

    const todo: Todos[] = [
        {title: 'Learn Redux Toolkit', checked: true},
        {title: 'Learn NGRX', checked: false},
        {title: 'Learn NestJS', checked: false}
    ];

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <Todo paragraph={paragraph}/>
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

export const Todo: React.FC<any> = ({paragraph}) => {
    return (
        <div>
            {paragraph}
        </div>
    )
}

export const TodoList: React.FC<any> = (props) => {
    const [text, setText] = useState<string>('Hi Almas!');
    const [users, setUsers] = useState<any>([]);
    const [toggle, setToggle] = useState<boolean>(false);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(users => setUsers(users));
    },[]);

    return (
        <div className={props.text}>
            {users.map((user: any) => (
                <ul>
                    <li style={{listStyle: 'none'}} key={user.name}>{user.name} ------------- {user.email}</li>
                </ul>
            ))}
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
