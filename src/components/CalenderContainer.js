import "./style.css";
import { useState } from "react";
import Calendar from "./Calendar";
import { useSelector } from "react-redux";



export default function CalanderContainer() {

  const tasks = useSelector(state=> state.tasks)
  console.log(tasks)

  
  
  
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  
  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };
  
  const habitCalander = tasks.map((task,index) => {
    return(<div key={task.id} className="App1">
      <div> </div>
              <Calendar showDetailsHandle={showDetailsHandle} habitName={task.habitName} stateWeek={task.week} stateStatus={task.status} />   
          </div>)
  
  })
  return (
    <div>
      <div className="calander-hint">
        <div>calander hint</div>
        <div className="hint-box-container">
          <div className="hint-box">
             <div className="hint-border-today"> </div>
            
             <p>today's date</p>
          </div>
          <hr/>
          <div className="pending-hint hint-box">
             <div className="hint-border-pending"> </div>
             <p>Habit Pending </p>
          </div>
          <hr/>
          <div className="pending-hint hint-box">
             <div className="hint-border-not-complete"> </div>
             <p>Habit Not Complete </p>
          </div>
          <hr/>
          <div className="pending-hint hint-box">
             <div className="hint-border-complete"> </div>
             <p>Habit Complete </p>
          </div>
        </div>
      </div>
      {habitCalander}
    </div>
  );
}

/**
 * Follow this tutorial https://medium.com/@moodydev/create-a-custom-calendar-in-react-3df1bfd0b728
 * and customised by TTNT
 * date-fns doc: https://date-fns.org/v2.21.1/docs
 */