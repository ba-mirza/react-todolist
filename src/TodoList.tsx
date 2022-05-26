import React from "react";

type propsType = {
    title: string
}

export const TodoList: React.FC<any> = (props: propsType) => {

    return (
        <div>
            <div>
                <h1>{props.title}</h1>
                <input type="text"/>
                <button>add</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/>Hello WOrld</li>
                <li><input type="checkbox" checked={false}/>Hello TIme</li>
                <li><input type="checkbox" checked={false}/>Hello RIko</li>
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}