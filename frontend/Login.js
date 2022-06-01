import "./Login.css"
import * as React from 'react';
// import ReactDOM from "react-dom"
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

const Login = () => {
    return (
        <>
        <div className=" main-div">
        {/* <Stack direction="row" spacing={2}> */}
            <h1 className="Logo">Logo</h1>
            <p>Enter your credentials to access your account</p>
            <input className="user-id" type="text" placeholder="User ID"/>
            <input className="password" type="password" placeholder="Password"/>
            {/* <Button variant="contained" color="#4C57B6">Sign In</Button> */}
            <div className="b-div"><button type='submit' > Sign In</button> </div>       
            <a type='submit' href="/signUp" > Sign Up</a>
        {/* </Stack> */}
        </div>

        </>
      );
}
 
export default Login;