import React from "react";
//import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
//import { signIn } from "../../actions/action";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
    },
    paper: {
        //margin: theme.spacing(8, 4), fixes the layout issue but its better to hide the navigation in this part
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row-reverse",
        position: 'relative',
        bottom: '-33rem',
        marginLeft: '5px',
        marginRight: '5px',
    },

    form: {
        width: "100%", // Fix IE 11 issue.
        
        marginTop: theme.spacing(1),
    },
    submit: {
        color: "#fff",
        backgroundColor: "#000000",
        margin: theme.spacing(3, 1, 3, 1),
        "&:hover": {
            backgroundColor: "#36454F",
            boxShadow: "none",
        },
    },
}));

export default function LoginIndex({ history }) {
    const classes = useStyles();
    const matches = useMediaQuery("(max-width:600px)");
    
    return (
        <Grid container component='main' className={classes.root}>
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
                <div className={classes.paper}>
                    <div className={classes.form}>
                        <Container component='main' maxWidth='xs'>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <p
                                        className='title'
                                        style={{
                                            marginTop: '20px', position: 'relative',
                                            top: '15rem', fontSize: '48px !important'
                                        }}>taskstech</p>
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
                                            width: matches ? "34vw" : "38vw",
                                            height: "7vh",
                                        }} //onClick={() => history.push("/create/job")}
                                        onClick={() => history.push("/mobile-login")}
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        type='submit'
                                        fullWidth
                                        variant='contained'
                                        className={classes.submit}
                                        style={{
                                            width: matches ? "34vw" : "38vw",
                                            height: "7vh",
                                        }}
                                    //onClick={() => handleSubmit()}
                                    >
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
