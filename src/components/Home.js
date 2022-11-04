import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { changeStatus , deleteTask } from "../redux/tasks";

// home screen where users can change the status of the habit which they added , and also they can delete the habit

export default function Home(){



    const  dispatch = useDispatch()
    const tasks= useSelector(state=> state.tasks)
    console.log(tasks)
    const elements =tasks.map((item,index) =>{
      
        console.log(item)
        function handleChange(e){
        dispatch(changeStatus(e.target.value,item.id));
    }
    // console.log(status);
    return (<div className="card" key={item.id}>
                <h2 className="habit-name">{item.habitName}</h2>
                <div className="habit-time-day">
                    <p className="habit-day">{item.week}</p>
                    <p className="habit-time">{item.time}</p>
                </div>
                <img className="delete-btn" onClick={()=> dispatch(deleteTask(item.id))} src="https://img.icons8.com/pastel-glyph/30/000000/trash.png" alt="delete-btn"/>
                <select defaultValue={item.status} onChange={handleChange}>
                    <option>task-status</option>
                    <option>completed</option>
                    <option>not-completed</option>
                </select>
           </div>)
    })

    return(
        <div className="home">
            {elements}
            <Link to="/add"><div className="add-task-btn"><img src="https://img.icons8.com/plasticine/100/000000/plus-2-math.png" alt="add-habit"/></div></Link>
        </div>
    )
}

