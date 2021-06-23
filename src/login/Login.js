import react, {useContext} from 'react';
import Card from '../Utility/Card';
import './Login.css';
import AuthContext from '../context/auth-context';

const submitHandler = (event) => {
    event.preventDefault();
    console.log('Form submitted ...');
    console.log(temp);
    temp.toggleLogin();
    temp.history.push('/landingPage');
}

let temp;

const Login = (props) => {

    const ctx = useContext(AuthContext);
    

    temp = props;
    return (
        <div className="backdrop">
        <Card>
            <form onSubmit={submitHandler}>
                <label>Email Id : <br/> </label>
                <input type="email" id="login__notes" />
                <br/>
                <label>Password : <br/></label>
                <input type="text" id="login__notes"/>
                <br/>
                <button type="submit" id="login__button">Login</button>
            </form>
        </Card>
        </div>
    )

};

export default Login;