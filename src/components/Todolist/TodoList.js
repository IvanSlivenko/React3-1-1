import React from "react";
import classNames from "classnames";
import Todo from '../Todo';
import "./Todolist.css";


const Todolist = ({todos, onDeleteTodo, onToggleCompleted}) => 
    <ul className="TodoList">
        {/* {todos} */}
        {todos.map(({id, text, completed}) =>
            <li
                key={id}
                // className="TodoList__item"  
                className={classNames('TodoList__item', {
                    'TodoList__item--completed': completed,
                })}
            >
                <Todo
                    text={text}
                    completed={completed}
                    onToggleCompleted={() => { onToggleCompleted(id) }}
                    onDelete={() => {onDeleteTodo(id) } }
                />
            </li>
        )}
    </ul>



export default Todolist;