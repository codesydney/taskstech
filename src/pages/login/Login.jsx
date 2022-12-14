import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button"; 
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@mui/material/TextField"; 
import Link from "@mui/material/Link"; 
import Paper from "@material-ui/core/Paper";
import Grid from "@mui/material/Grid"; 
import Container from "@mui/material/Container";
import Logo from "../../components/logo/Logo";
import { signIn } from "../../actions/action";
import wave from "../../components/logo/wave.png";
import "./login.css";
 
export default function Login () {
    const dispatch = useDispatch();
    const matches = useMediaQuery("(max-width:600px)");

    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    const inputEmail = useCallback(
        event => {
            setEmail(event.target.value);
        },
        [setEmail]
    );

    const inputPassword = useCallback(
        event => {
            setPassword(event.target.value);
        },
        [setPassword]
    );

    const handleSubmit = () => {
        if (email === "" || password === "") {
            alert("Please fill in the form.");
            return false;
        }
        dispatch(signIn(email, password));
    };

    const onKeyEnter = event => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <Grid container component='main' className='root'>
            <CssBaseline />
            <div className='login-container'>
                <div className='logo-container'>
                    {matches === true ? <></> : <Logo />}
                    <div id="wave-container">
                        <img 
                            id='wave' 
                            className='wave waveMobile' 
                            src={wave} 
                        />
                    </div>
                </div>
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
                        <div className='form formMobile'>
                            <Container component='main' maxWidth='xs'>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <p className='title'>Login</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant='outlined'
                                            margin='normal'
                                            required
                                            fullWidth
                                            id='email'
                                            label='Enter your Email'
                                            name='email'
                                            placeholder='youremail@mail.com'
                                            value={email}
                                            onChange={inputEmail}
                                            autoComplete='email'
                                            autoFocus
                                        />
                                        <TextField
                                            variant='outlined'
                                            margin='normal'
                                            required
                                            fullWidth
                                            label='Enter your password'
                                            type='password'
                                            id='password'
                                            name='password'
                                            placeholder='Enter your password'
                                            value={password}
                                            onChange={inputPassword}
                                            autoComplete='password'
                                            onKeyPress={event =>
                                                onKeyEnter(event)
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className='links'>
                                            <Link href='#' variant='body2'>
                                                Forgot password?
                                            </Link>
                                            <Link
                                                href='/signup'
                                                variant='body2'
                                            >
                                                {
                                                    "Don't have an account? Sign up"
                                                }
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    className='buttonContainer'
                                >
                                    <Grid item xs={12}>
                                        <Button
                                            type='submit'
                                            fullWidth
                                            variant='contained'
                                            className='submit'
                                            style={{
                                                width: matches
                                                    ? "78vw"
                                                    : "25vw !important",
                                                height: "7vh",
                                            }}
                                            onClick={() => handleSubmit()}
                                        >
                                            Log in
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Container>

                            {/* </form> */}
                        </div>
                    </div>
                </Grid>
            </div>
        </Grid>
    );
}
