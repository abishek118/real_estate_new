import {  Link } from "react-router-dom";
function Signup() {
    return (<> <div class="main" >
        <h1>logo</h1>
        <p>CREATE NEW ACCOUNT</p>
        <input placeholder="Enter gmail"></input> 
        <input placeholder="Password"></input> 
        <input placeholder="Confirm password"></input> 
       <Link to="signup"><button>sigin up</button></Link>
        
    </div>
    <Link to="/">
    <h1>sigin</h1>
    </Link></> );
}

export default Signup;