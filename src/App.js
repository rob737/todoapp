import React, { useState, useEffect } from 'react';
import './App.css';
import CreateEntry from './components/CreateEntry';
import { Route, Redirect } from "react-router-dom";
import Task from './constant/Constant';
import NewTask from './components/NewTask';
import Login from './login/Login';
import Navbar from './components/Navbar';
import AuthContext from './context/auth-context';

function App() {

    const [tasks, setTasks] = useState(Task);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    {/* This is pass by reference. */ }
    const formSubmitHandler = (addedTask) => {
        {/*This makes sure, we are referring to the latest prevTask*/ }
        setTasks(prevTask => {
            let temp = [...prevTask, addedTask];
            localStorage.setItem('createdTasks', JSON.stringify(temp))
            return temp
        }
        );
    };

    const loginHandler = () => {
        setIsLoggedIn(true);
    }

    {/*useEffect is executed after all components are rendered.*/ }
    useEffect(() => {
        console.log('After reload ....');
        setTasks(JSON.parse(localStorage.getItem('createdTasks')));
    }, []);

    const updateRemoveHandler = (removedTask) => {
        console.log('Removed task : ' + removedTask);

        setTasks(prevTask => {
            let filteredTask = prevTask.filter((curTask) => curTask !== removedTask);
            localStorage.setItem('createdTasks', JSON.stringify(filteredTask));
            return filteredTask;
        }
        );
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn
        }
        }>
            <Navbar />
            <div className="todo_creatediv">
                {console.log('App.js')}
                <NewTask onFormSubmit={formSubmitHandler} />
                <CreateEntry tasks={tasks}
                    onRemoveEvent={updateRemoveHandler}
                />

            </div>
            <Route path="/" exact>
                <Redirect to="/login" />
            </Route>
            <Route path="/login" render={ (props) => <Login {... props} toggleLogin={loginHandler} /> }/>
            <Route path="/landingPage"> </Route>
        </AuthContext.Provider>
    );

}

export default App;
