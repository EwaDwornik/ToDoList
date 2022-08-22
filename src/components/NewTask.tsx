import React, {useState} from 'react';
import "../style/App.css";

export interface Task {
    text: string;
    complete: boolean;
    deadline: string;
}

const initialState: Task = {
    text: '',
    complete: false,
    deadline: ''
}

export const tasksDB: Task[] = [
    {
        text: 'Push your project to GitHub',
        complete: false,
        deadline: '2022-08-12'
    },
    {
        text: 'Write a cover letter',
        complete: false,
        deadline: '2022-08-22'
    },
];

function NewTask({props}: any) {
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        tasksDB.push({...formState});
        props(formState);
        setFormState(initialState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className="col-8 ">
                        <label className="form-label">To-do list:</label>
                        <input
                            type='text'
                            className="form-control"
                            placeholder="type a task"
                            required
                            value={formState.text}
                            onChange={e => {
                                setFormState({...formState, text: e.target.value});
                            }}/>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Deadline:</label>
                        <input
                            type='date'
                            className="form-control"
                            required
                            value={formState.deadline}
                            onChange={e => {
                                setFormState({...formState, deadline: e.target.value});
                            }}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary form-control">add</button>
                </div>
            </form>
        </div>
    );
}

export default NewTask;
