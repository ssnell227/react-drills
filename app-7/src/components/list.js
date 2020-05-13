import React from 'react';
import Todo from './todo'

function List (props) {
    return (
        <list>
            {props.todo.map(item => {
               return <Todo item={item}/>
            })}
        </list>
    )
}

export default List;
