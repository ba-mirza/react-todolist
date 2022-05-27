import React from "react";

type Todo = {
    id: number,
    title: string,
    checked: boolean,
}

type propsType = {
    todo: Todo[];
    text?: string
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
                    props.todo.map((todo) => (
                        <li>
                            <input type="checkbox" checked={todo.checked}/>
                            <span>{todo.title}</span>
                            <button onClick={({target}) => console.log(target)}>x</button>
                        </li>
                    ))
                }
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}