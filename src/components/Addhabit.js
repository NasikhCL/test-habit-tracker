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
            time : time ,
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
                        <input type='radio' name="week" value="MON" checked={week.week === 'MON'} onChange={onChange} />
                    </label>
                    <label>
                        Tuesday:
                        <input type='radio' name="week" value="TUE"  checked={week.week === 'TUE'} onChange={onChange} />
                    </label>
                    <label>
                        Wednesday:
                        <input type='radio' name="week" value="WED" checked={week.week === 'WED'} onChange={onChange} />
                    </label>

                    <label>
                        Thursday:
                        <input type='radio' name="week" value="THU" checked={week.week === 'THU'} onChange={onChange} />
                    </label>
                    <label>
                        Friday:
                        <input type='radio' name="week" value="FRI" checked={week.week === 'FRI'} onChange={onChange} />
                    </label>
                    <label>
                        Saturday:
                        <input type='radio' name="week" value="SAT" checked={week.week === 'SAT'} onChange={onChange} />
                    </label>
                    <label>
                        Sunday:
                        <input type='radio' name="week" value="SUN" checked={week.week === 'SUN'} onChange={onChange} />
                    </label>
                </div>
                <div className="set-time">
                    <input type='time' value={time} onChange={(e)=> setTime(e.target.value)}/>
                </div>
                <button className="ui button primary" type="submit">Submit</button>
            </form>
            
        </div>
        
    )
}