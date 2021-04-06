import React from "react"
import './Todo.css'

const item = props =>{
    const handleClick = ()=>{
        props.toggleItem(props.item.id);
      }
    
    return(
        <div onClick={handleClick} className={props.item.completed? 'completed':''}> 
            <p>{props.item.task}</p>
        </div>
    )

}
export default item;