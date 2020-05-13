import React, { Component } from 'react';

function Todo (props) {
    return (
        <list>
            {props.todo.map(item => {
               return <li>{item}</li>
            })}
        </list>
    )
}

export default Todo;
