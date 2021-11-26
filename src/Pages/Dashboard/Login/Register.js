import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import TopHeader from '../../../Shared/TopHeader/TopHeader';
import Footer from '../../../Shared/Footer/Footer';
import { Grid,Container, Typography, TextField,Button, CircularProgress, Alert } from '@mui/material';
import login from "../../../images/login.jpg"
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const {error,user,registerUser,loading}=useAuth()
    const history =useHistory()
    const [loginData,setLoginData]=useState({})
    const handleLoginSubmit = (e) => {
        if(loginData.password!==loginData.password2){
            alert("Your password did not match")
            return ;
        }
        registerUser(loginData.email,loginData.password,loginData.name,history)
        e.preventDefault();
         console.log("reg is clicked");
        // signInWithEmailPassword(email, password)
        //     .then((result) => {
        //         // Signed in 
        //         const user = result.user;
        //         console.log(user);
        //         setError('');
        //         history.push(redirect_uri);
        //     })
        //     .catch((error) => {
        //         // const errorCode = error.code;
        //         setError(error.message);
        //     })
        //     .finally(() => setLoading(false));
    }
    const handleOnChange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    return (
        <div>
            <TopHeader/>
            <Container>
                <Grid container spacing={2}>
                     <Grid item sx={{mt:8}} xs={12} md={6}>
                         <Typography variant="body1" gutterBottom>
                         <h3>Register</h3>
                         </Typography>
                         {!loading && <form onSubmit={handleLoginSubmit}>
                         <TextField
                         type="text"
                         sx={{width:'75%',m:1}}
                         id="standard-basic1"
                         label="Your Name"
                         variant="standard"
                         name="name"
                         onBlur={handleOnChange}
                         />
                         <TextField
                         type="email"
                         sx={{width:'75%',m:1}}
                         id="standard-basic1"
                         label="Your Email"
                         variant="standard"
                         name="email"
                         onBlur={handleOnChange}
                         />
                         <TextField
                         sx={{width:'75%',m:1}}
                         id="standard-basic"
                         label="Your Password"
                         variant="standard"
                         type="password"
                         name="password"
                         onBlur={handleOnChange}
                         />
                         <TextField
                         sx={{width:'75%',m:1}}
                         id="standard-basic"
                         label="Confirm Your Password"
                         variant="standard"
                         type="password"
                         name="password2"
                         onBlur={handleOnChange}
                         />
                        
                         <Button sx={{width:"75%",m:1}} type="submit" variant="contained">Register</Button>
                         <NavLink style={{textDecoration:"none"}} to="/login">
                             <Button variant="text">Already Register?Please Login</Button>
                         </NavLink>
                         </form>}
                         
                         
                         </Grid>  
                         <Grid item xs={12} md={6}>
                             <img style={{width:"100%"}} src={login} alt=""/>
                         </Grid>
                </Grid>
                </Container>
            <Footer/>
        </div>
    );
};

export default Register;