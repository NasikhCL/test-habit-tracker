export function addTask(data) {
    return {
            type: "ADD_TASK",
            payload: data
        }
}

// export function addTask(data , history) {
//     return (dispatch)=> {
//         dispatch({
//             type: "ADD_TASK",
//             payload: data
//         }).then((res)=> history.push('/'))
//     }
// }


// return (dispatch) => {
//     dispatch({
//         type: ACTION_TYPE,
//         data,
//     }).then((response) => {
//         dispatch(push('/my_url'));
//     });
// };
// function actionName(data, history) { history.push('/dashboard') }
export function changeStatus(status,id) {
    return {
        type: "CHANGE_STATUS",
        payload: {status,id}
    }
}

export function deleteTask(id) {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}

let task= [{
    id: 1,
    'habitName': 'GYM',
    'week' : 'tue',
    'time': '09:30',
    'status': 'not-completed'
}]

export default function addTaskReducer(tasks=task , action) {
    switch(action.type) {
        case "ADD_TASK":
            return tasks = [...tasks , action.payload]
            case "CHANGE_STATUS":
                let changedTasks = tasks.map(item=>{ 
                    console.log('reached here')
                    if(item.id === action.payload.id){
                        return{
                            ...item,
                            status: action.payload.status
                        }
                    }else{
                      return  item
                    }
                
                })
                return changedTasks
                case "DELETE_TASK": {
                let newTasks = tasks.filter(item => item.id !== action.payload)
                return newTasks
                }
        default:
            return tasks
    }
}

