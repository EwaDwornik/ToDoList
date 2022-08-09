import React, {useState} from 'react';
import "../style/App.css";
import NewTask, {Task, tasksDB} from '../components/NewTask';


function App() {
    const [list, updateList] = useState(tasksDB);

    const addTask = (task: Task) => {
        updateList([...list, task])
    }

    const handleChange = (event: any, task: Task) => {
        if (event.target.checked) {
            task.complete = false;
        } else {
            task.complete = true;
        }

    };

    const taskCards: any[] = [];
    for (let task of tasksDB) {
        taskCards.push(
            <div className="card">
                <div className="card-body row">
                    <div className="col-1">{task.text}</div>
                    <div className="col-1">
                        <h3 style={{ textDecoration: task.complete ? 'line-through' : undefined }}>{task.text}</h3>
                        <input type="checkbox" checked={task.complete} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className='col-md-6'>
                <NewTask props={addTask}/>
                {taskCards}
            </div>
        </div>
    )
}

export default App;
