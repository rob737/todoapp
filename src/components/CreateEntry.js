import React, { useState } from "react";
import '../styling/CreateEntry.css';
import RenderEntry from "./RenderEntry";

function CreateEntry(props) {
    let tasks = props.tasks;

    function deletedItem(delItem) {
        console.log('Item removed : ' + delItem);
        props.onRemoveEvent(delItem);
    }

    return (
        <React.Fragment>
           {console.log(tasks)}
            { 
                tasks.map( task => (
                <RenderEntry 
                 key = {Math.random()}
                 task = {task}
                 removedItem = {deletedItem}
                />
            ))}
        </React.Fragment>
    )
}

export default CreateEntry;