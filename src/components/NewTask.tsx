import React, {useState} from 'react';
import "../style/App.css";

function generateId() {
    return nextId++;
}

export interface Task {
    id: number;
    text: string;
    complete: boolean;
}

let nextId = 1;

const initialState: Task = {
    id: 1,
    text: '',
    complete: false
}

export const tasksDB: Task[] = [];

function NewTask({props}: any) {
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        tasksDB.push({...formState, id: generateId()});
        tasksDB.sort((a, b) => (b.id > a.id) ? 1 : -1)
        props(formState);
        setFormState(initialState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
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
                <div >
                    <button type="submit" className="btn btn-primary form-control">add</button>
                </div>
            </form>
        </div>
    );
}

export default NewTask;
