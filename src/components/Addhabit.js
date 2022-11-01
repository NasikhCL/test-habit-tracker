import React, { useState } from "react";
import uuid from "react-uuid";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../redux/tasks";
// import history from "../history";


export default function Addhabit(){

    // const history = useHistory();
   


    const [week, setWeek] = useState({
        week : ""
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [habit, setHabit] = useState({
        habitName: ''

});
    const [time , setTime] = useState('')
    
    
    
console.log(habit)
 const onSubmit = (e) => {
        e.preventDefault();
        
       
        // const input = { name, time, id: newId, status: 'P' }
        const data = {
            id: uuid(),
            habitName: habit.habitName,
            week: week.week,
            time : time,
            status: 'task-status'
        }
         dispatch(addTask(data))
    //  redirect('/')
        navigate('/') 
        // history.push('/') 
    }

    function onChange (e){
        const {name , value , checked} = e.target
        // console.log( name )
        
        setWeek(prevState=>{
            return {
                
                week : value
                

            }
        });
     
    }


    return(
            <div className='ui container'>
            <form className="ui form" onSubmit={(e) => { onSubmit(e) }}>
                <div className="field">
                    <label>Task Name</label>
                    <input type="text" value={habit.habitName} placeholder="habit Name" onChange={(e) => { setHabit({habitName : e.target.value}) }} />
                </div>
                <div className="select-weeks">
                    <label>
                        Monday:
                        <input type='radio' name="week" value="mon" checked={week.week === 'mon'} onChange={onChange} />
                    </label>
                    <label>
                        Tuesday:
                        <input type='radio' name="week" value="tue"  checked={week.week === 'tue'} onChange={onChange} />
                    </label>
                    <label>
                        Wednesday:
                        <input type='radio' name="week" value="wed" checked={week.week === 'wed'} onChange={onChange} />
                    </label>

                    <label>
                        Thursday:
                        <input type='radio' name="week" value="thu" checked={week.week === 'thu'} onChange={onChange} />
                    </label>
                    <label>
                        Friday:
                        <input type='radio' name="week" value="fri" checked={week.week === 'fri'} onChange={onChange} />
                    </label>
                    <label>
                        Saturday:
                        <input type='radio' name="week" value="sat" checked={week.week === 'sat'} onChange={onChange} />
                    </label>
                    <label>
                        Sunday:
                        <input type='radio' name="week" value="sun" checked={week.week === 'sun'} onChange={onChange} />
                    </label>
                </div>
                <div className="set-time">
                    <input type='time' onChange={(e)=> setTime(e.target.value)}/>
                </div>
                <button className="ui button primary" type="submit">Submit</button>
            </form>
            
        </div>
        
    )
}