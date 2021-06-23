import React, { useState, useRef, useContext } from "react";
import '../styling/NewTask.css';
import AuthContext from "../context/auth-context";

const NewTask = (props) => {

    const inputElement = useRef();
    const [isValid, setIsValid] = useState(true);

    const ctx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputElement.current.value)
        let transferNote = inputElement.current.value;
        console.log('Transfer note : ' + transferNote);
        if (transferNote.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onFormSubmit(transferNote);
        inputElement.current.value = '';

    };

    return (
        <React.Fragment>
            {console.log('New task.js')}
            <form onSubmit={submitHandler}>
                <div className={`todo_creatediv_inner ${!isValid ? 'invalid' : ''}`}>
                    <input type="text" id="todo_creatediv__notes"
                        ref={inputElement}
                    />
                </div>
                <div>
                    <button className="notes__badge" type="submit" disabled = {!ctx.isLoggedIn}>Add</button>
                </div>
            </form>
        </React.Fragment>
    )

};


export default NewTask;