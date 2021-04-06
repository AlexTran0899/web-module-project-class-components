import React from "react";
import Todo from "./Todo";


const TodoList = props =>{

    const handleClick =()=>{
        props.clear();
    }

return(
    <div className="todo-list">
        {props.todos.map(item =>(
            <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
        )) }

        <button onClick={handleClick}>Clear</button>
    </div>




)
}
export default TodoList