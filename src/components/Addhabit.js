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
        habitName: null

});
    const [time , setTime] = useState('')
    
    
    
console.log(habit)
 const onSubmit = (e) => {
        e.preventDefault();
        if (!habit.habitName){
            navigate('/') 
            return;
        }
        
       
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
            <div className='add-task-container'>
                <h3>Add a Habit</h3>
            <form className="form" onSubmit={(e) => { onSubmit(e) }}>
                <div className="field">
                    <label>Habit Name: </label>
                    <input type="text" className="input-habit-name" value={habit.habitName} placeholder="habit Name" onChange={(e) => { setHabit({habitName : e.target.value}) }} required/>
                </div>
                <div className="select-weeks">
                    <label>Select Day:</label>
                    <br/>
                    <label>
                        <input type='radio' name="week" value="MON" checked={week.week === 'MON'} onChange={onChange} required/>
                        :Monday
                    </label>
                    <label>
                        <input type='radio' name="week" value="TUE"  checked={week.week === 'TUE'} onChange={onChange} />
                        :Tuesday
                    </label>
                    <label>
                        <input type='radio' name="week" value="WED" checked={week.week === 'WED'} onChange={onChange} />
                        :Wednesday
                    </label>

                    <label>
                        <input type='radio' name="week" value="THU" checked={week.week === 'THU'} onChange={onChange} />
                        :Thursday
                    </label>
                    <label>
                        <input type='radio' name="week" value="FRI" checked={week.week === 'FRI'} onChange={onChange} />
                        :Friday
                    </label>
                    <label>
                        <input type='radio' name="week" value="SAT" checked={week.week === 'SAT'} onChange={onChange} />
                        :Saturday
                    </label>
                    <label>
                        <input type='radio' name="week" value="SUN" checked={week.week === 'SUN'} onChange={onChange} />
                        :Sunday
                    </label>
                </div>
                <div className="set-time">
                <label>Select TIme:</label>
                    <br/>
                    <input type='time' className="set-time" value={time} onChange={(e)=> setTime(e.target.value)} required/>
                </div>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
            
        </div>
        
    )
}