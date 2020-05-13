import React from 'react';

function NewTask(props) {
    return (
        <div>
            <input placeholder='Enter new task'  value={props.value} onChange={props.updateInput} ></input>
            <button onClick={props.addItem}>Submit</button>
        </div>
    );
}

export default NewTask;
