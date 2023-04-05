import React from "react";
import IconButton from "components/IconButton/IconButton";
// import { ReactComponent as Delete } from "../icons/delete.svg";
// import { ReactComponent as AddIcon } from './components/icons/add.svg';
import {ReactComponent as DelleteIcon } from "../../components/icons/delete.svg";

const Todo = ({text, completed, onToggleCompleted, onDelete }) => ( 
 
        <>

         <input
                    type="checkbox"
                    className="TodoList__checkbox"
                    checked={completed}
                // onChange={() => onToggleCompleted(id)}
                onChange={onToggleCompleted}
                />
                <p className="TodoList__text">{text}</p>
                <button
                    className="TodoList__Button"
                    onClick={onDelete}
                >

                    Видалити
        </button> 

        <IconButton onClick={onDelete} > <DelleteIcon  width="25px" height="25px" fill="#fff"/>  </IconButton>  

        </>
         
)
export default Todo;