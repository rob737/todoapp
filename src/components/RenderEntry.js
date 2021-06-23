import React from 'react';


function RenderEntry(props) {

    let task = props.task;

    function removeHandler(text,event) {
        console.log('Removed DOM text :' + task)
        props.removedItem(text);
    }

    return (
        <div className="todo_creatediv_inner">
            {console.log('Render entry')}
            <button id="button_element">{task}</button>
            <div className="todo_creatediv__badge" onClick={(e) => removeHandler(task, e)}>remove</div>
        </div>
    )

}

export default RenderEntry;