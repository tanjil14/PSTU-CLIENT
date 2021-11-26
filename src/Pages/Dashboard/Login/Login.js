import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import TopHeader from '../../../Shared/TopHeader/TopHeader';
import Footer from '../../../Shared/Footer/Footer';
import { Grid,Container, Typography, TextField,Button, CircularProgress, Alert } from '@mui/material';
import login from "../../../images/login.jpg"
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const {user,loginUser,loading,error}=useAuth()
    const [loginData,setLoginData]=useState({})
    const location = useLocation();
    const history = useHistory();
    // const redirect_uri = location.state?.from || '/home';
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email,loginData.password,location,history)
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
    // const handleGoogleLogin = () => {
    //     singInUsingGoogle()
    //         .then(result => {
    //             history.push(redirect_uri);
    //             console.log(result);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }
    // const handleEmailChanged = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChanged = (e) => {
    //     setPassword(e.target.value);
    // }
    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)
    }
    return (
        <div>
            <TopHeader/>
            <Container>
                <Grid container spacing={2}>
                     <Grid item sx={{mt:8}} xs={12} md={6}>
                         <Typography variant="body1" gutterBottom>
                         <h3>Login</h3>
                         </Typography>
                         <form onSubmit={handleLoginSubmit}>
                         <TextField
                         sx={{width:'75%',m:1}}
                         id="standard-basic1"
                         label="Your Email"
                         variant="standard"
                         name="email"
                         onBlur={handleOnBlur}
                         />
                         <TextField
                         sx={{width:'75%',m:1}}
                         id="standard-basic"
                         label="Your Password"
                         variant="standard"
                         type="password"
                         name="password"
                         onBlur={handleOnBlur}
                         />
                        
                         <Button sx={{width:"75%",m:1}} type="submit" variant="contained">Login</Button>
                         <NavLink style={{textDecoration:"none"}} to="/register">
                             <Button variant="text">New User?Please Register</Button>
                         </NavLink>
                         {
                             loading && <CircularProgress/>
                         }
                         {
                           user?.email && <Alert severity="success">User login Successfully!</Alert>
                         }
                         {
                             error && <Alert severity="error">{error}</Alert>
                         }
                         </form>
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

export default Login;