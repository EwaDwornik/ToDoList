import React, {useState} from 'react';
import "../style/App.css";
import NewTask, {Task, tasksDB} from '../components/NewTask';


function App() {
    const [list, updateList] = useState(tasksDB);
    const addTask = (task: Task) => {
        const newTask: Task[] = [...list, task];
        newTask.sort((a, b) => (b.deadline < a.deadline) ? 1 : -1)
        updateList(newTask)
    }

    const toggleTask = (index: number) => {
        const newTask: Task[] = [...list];
        newTask[index].complete = !newTask[index].complete;
        updateList(newTask);
    }

    const handleDelete = (index: number) => {
        const newTasks: Task[] = [...list];
        newTasks.splice(index, 1);
        updateList(newTasks);
    }

    const today = new Date ();

    return (
        <div className="row d-flex justify-content-center mt-5">
            <div id="first">
                <h1 className="title">Make a plan</h1>
            </div>

            <div className='col-md-6 todo'>
                <NewTask props={addTask}/>
                {
                    list.map((task: Task, index: number) => (
                        <div className="card">
                            <div className="row" key={index}>
                                <div className="col-md-auto my-auto"><input type="checkbox" onChange={() => toggleTask(index)}/></div>
                                <div className="col my-auto"
                                    style={{textDecoration: task.complete ? "line-through" : "none"}}>{task.text}
                                </div>
                                <div className="col col-lg-4 my-auto" style={{color: (today.toISOString().split('T')[0] > task.deadline) ? 'red' : 'black'}}>
                                    {task.deadline}
                                </div>
                                <div className="col col-lg-2 h-100">
                                    <button className="btn btn-primary form-control h-100"
                                            onClick={() => handleDelete(index)}>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div id="second">
                <h1 className="title">Stick to the plan</h1>
            </div>
        </div>
    )
}

export default App;
