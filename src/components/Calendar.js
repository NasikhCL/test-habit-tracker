import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
// import uuid from "react-uuid";

const Calendar = ({ showDetailsHandle ,habitName ,stateWeek ,stateStatus }) => {
  // const dayFromState = useSelector(state=> state.tasks)
 
  // const dayStatusFromState = useSelector(state=> state.status)
  console.log(stateWeek)
  console.log(stateStatus);
  let habitWeek ;
    if(stateWeek === 'mon')  habitWeek = 1 ; 
    if(stateWeek === 'tue')  habitWeek = 2 ;
    if(stateWeek === 'wed')  habitWeek = 3 ;
    if(stateWeek === 'thu')  habitWeek = 4 ;
    if(stateWeek === 'fri')  habitWeek = 5 ;
    if(stateWeek === 'sat')  habitWeek = 6 ;
    if(stateWeek === 'sun')  habitWeek = 0 ;

    console.log(habitWeek)
  // if(stateWeek.mon){
  //  habitWeek.push(1)
  // }
  // if(stateWeek.tue){
  //   habitWeek.push(2)
  //  }
  //  if(stateWeek.wed){
  //   habitWeek.push(3)
  //  }
  //  if(stateWeek.thu){
  //   habitWeek.push(4)
  //  }
  //  if(stateWeek .fri){
  //   habitWeek.push(5)
  //  }
  //  if(stateWeek .sat){
  //   habitWeek.push(6)
  //  }
  //  if(stateWeek .sun){
  //   habitWeek.push(7)
  //  }
   
  // console.log(habitWeek)
  // const weekArray = [ ...stateWeek ]
  // const weekData = weekArray.map(item=> {
  //   if(item.mon){
  //   return 1;
  //   }else if(item.tue){
  //     return 2;
  //   }
  // })

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon">
            <h2>{habitName}</h2>
          </div>
          {/* <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div> */}
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          {/* <div className="icon" onClick={() => changeMonthHandle("next")}>next month</div> */}
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        console.log(day.getDay())
        days.push(
          <div
            className={`col cell ${
              ( isSameDay(day, new Date()) && (habitWeek === (day.getDay())))
              ?(`${stateStatus}-today`)
              :(habitWeek === (day.getDay()))
                ? (`${stateStatus}`)
                : isSameDay(day, new Date())
                  ? "today"
                  : isSameDay(day, selectedDate)
                    ? "selected"
                    : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  const renderFooter = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            prev week
          </div>
        </div>
        {/* <div>current week: {currentWeek}</div> */}
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">next week</div>
        </div>
      </div>
    );
  };
  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {renderFooter()}
    </div>
  );
};

export default Calendar;
/**
 * Header:
 * icon for switching to the previous month,
 * formatted date showing current month and year,
 * another icon for switching to next month
 * icons should also handle onClick events to change a month
 */
