import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { signUp } from "../../actions/action";
import "./signup.css";

export default function TradieSignUp() {
    const dispatch = useDispatch();
    
    const regex = new RegExp('^(?!.{31})[a-z0-9]+(?:\\.[a-z0-9]+)*@[a-z0-9]+(?:[.-][a-z0-9-]+)*\\.[a-z]{2,6}$'); 
    const [hasError, setHasError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    useEffect(() => { setHasError(false); },[]);

    const inputFirstname = useCallback(
        (event) => {
            setFirstname(event.target.value);
        },
        [setFirstname]
    );

    const inputLastname = useCallback(
        (event) => {
            setLastname(event.target.value);
        },
        [setLastname]
    );

    const inputPhone = useCallback(
        (event) => {
            setPhone(event.target.value);
        },
        [setPhone]
    );

    const validateEmail = () => {
        if(regex.test(email.toLowerCase())) {
            setEmail(email);
            setErrorText("");
            setHasError(false);
        } 
        else if(email === "") {
            setErrorText("");
        } else {
            setErrorText("Maximum character limit of 30 is reached.");
            setHasError(true);
        }
    }

    const inputEmail = useCallback(
        
        (event) => {
            setEmail(event.target.value.toLowerCase());
        },
        [setEmail]
    );

    const inputPassword = useCallback(
        (event) => {
            setPassword(event.target.value);
        },
        [setPassword]
    );

    const inputConfirmPassword = useCallback(
        (event) => {
            setConfirmPassword(event.target.value);
        },
        [setConfirmPassword]
    );

    const inputDescription = useCallback(
        (event) => {
            setDescription(event.target.value);
        },
        [setDescription]
    );

    const handleSubmit = () => {
        if (
            firstname === "" ||
            lastname === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill in the form.");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Your password and confirm password do not match.");
            return false;
        }
        dispatch(
            signUp(
                firstname,
                lastname,
                email,
                password,
                confirmPassword,
                description,
                phone
            )
        );
    };

    const handleClear = () => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPhone('');
        setDescription('');
        setPassword('');
        setConfirmPassword('');
        setHasError(false);
    };

    const onKeyEnter = (event)=>{
        if(event.key === "Enter"){
            handleSubmit();
        }
    }
    return (
        <Grid container component="main" className='root'>
            <CssBaseline />
            
            <Grid
                item
                xs={12}
                sm={7}
                md={7}
                component={Paper}
                elevation={6}
                square
            >
                <div className='paper'>
                    <Typography component="h1" variant="h4">
                        Sign up
                    </Typography>
                    <div className='form'>
                        <Grid container spacing={3}>
                            <Grid container>
                                <Grid item id='login'>
                                    <Link href="login" variant="body2">
                                        {"Already have a account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="name"
                                    name="firstName"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    label="First Name*"
                                    autoFocus
                                    value={firstname}
                                    onChange={inputFirstname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="lastName"
                                    label="Last Name*"
                                    name="lastName"
                                    autoComplete="name"
                                    value={lastname}
                                    onChange={inputLastname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="phone"
                                    label="Phone No*"
                                    name="phone"
                                    autoComplete="tel"
                                    value={phone}
                                    onChange={inputPhone}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={hasError} 
                                    autoComplete="email"
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="Email*"
                                    autoFocus
                                    value={email}
                                    helperText={errorText}
                                    onChange={inputEmail}
                                    onBlur={validateEmail}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                className='description'
                            >
                                <TextField
                                    autoComplete="text"
                                    variant="outlined"
                                    fullWidth
                                    id="Description"
                                    label="description"
                                    name="description"
                                    value={description}
                                    onChange={inputDescription}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="password"
                                    autoComplete="password"
                                    name="password"
                                    variant="outlined"
                                    fullWidth
                                    id="password"
                                    label="Password*"
                                    autoFocus
                                    value={password}
                                    onChange={inputPassword}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="password"
                                    autoComplete="password"
                                    variant="outlined"
                                    fullWidth
                                    id="confirmpassword"
                                    label="Confirm Password*"
                                    name="confirmpassword"
                                    value={confirmPassword}
                                    onChange={inputConfirmPassword}
                                    onKeyPress={(event)=>onKeyEnter(event)}

                                />
                            </Grid>
                        </Grid>
                        <Grid container className='buttonContainer mobileButtonContainer'>
                            <Grid item xs={4} className="buttonGrid">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className='submit'
                                    onClick={() => handleSubmit()}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid item xs={4} className="buttonGrid">
                                <Button
                                    type="cancel"
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    className='submit'
                                    onClick={() => handleClear()}
                                >
                                    Clear
                                </Button>
                            </Grid>
                        </Grid>
                        {/* </form> */}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
