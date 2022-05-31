// import './login.css'
import { Link } from "react-router-dom";
function Login() {
    return (<>
    <div class="main">
    
      <h1>logo</h1><br/>
      <p>dfghjkl yguhjkl tfyghjk</p>
      <input placeholder="Enter Gmail"></input>
      <input placeholder="Password"></input>
      <Link to="desk1"><button>sign in</button></Link>
      <Link to="signup">sign up</Link>
    
    
    </div>
    <h1>Don't have any account?</h1>Signup
    </>);
}

export default Login;