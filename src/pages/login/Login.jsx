import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../components/logo/Logo";
import { signIn } from "../../actions/action";


const useStyles = makeStyles(theme => ({
    root: {
        height: "80vh",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row-reverse",
        //paddingTop: "15vh",
    },
    links: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginBottom: theme.spacing(1),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        color: "#fff",
        backgroundColor: "#000000",
        margin: theme.spacing(3, 2, 3, 0),
        "&:hover": {
            backgroundColor: "hsl(241, 87%, 52%)",
            boxShadow: "none",
        },
    },
}));

export default function Login () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const matches = useMediaQuery('(max-width:600px)');

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
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Logo />
            <Grid
                item
                xs={12}
                sm={7}
                md={7}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <div className={classes.form}>
                        <Container component='main' maxWidth='xs'>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Typography component='h1' variant='h5'>
                                        Login to TasksTech
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} style={{ textAlign: 'left', padding: '0 12px !important' }}>
                                    <p>*Required</p>
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
                                </Grid>
                                <Grid item xs={12}>
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
                                        onKeyPress={event => onKeyEnter(event)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.links}>
                                        <Link href='#' variant='body2'>
                                            Forgot password?
                                        </Link>
                                        <Link href='/signup' variant='body2'>
                                            {"Don't have an account? Sign up"}
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.buttonContainer}>
                                <Grid item xs={12}>
                                    <Button
                                        type='submit'
                                        fullWidth
                                        variant='contained'
                                        className={classes.submit}
                                        style={{ 
                                            width:  matches ? '78vw' : '38vw',
                                            height: '7vh'
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
        </Grid>
    );
}
