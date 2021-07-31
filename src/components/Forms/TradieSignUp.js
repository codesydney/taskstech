import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useForm from './useForm';
import validate from './validateInfo';
import Logo from "./Logo";




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer:{
      display: 'flex',
      flexDirection: 'row-reverse',
      paddingTop: '15vh',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 2, 3, 6),
  },
}));

export default function TradieSignUp() {
    const {handleChange, values, signUpSubmit, errors} = useForm(validate);

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
       <Logo />
      <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Tradies Sign up
          </Typography>
          <form className={classes.form}  onSubmit={signUpSubmit}>
          <Grid container spacing={3}>
          <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
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
                value={values.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              {errors.firstName && <p className="errormessage">{errors.firstName}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name*"
                name="lastName"
                autoComplete="name"
                value={values.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              {errors.lastName && <p className="errormessage">{errors.lastName}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="phone"
                label="Phone No*"
                name="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              {errors.phone && <p className="errormessage">{errors.phone}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="organization"
                name="licence"
                variant="outlined"
                fullWidth
                id="licence"
                label="Licenc No"
                autoFocus
                value={values.licence}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                fullWidth
                id="email"
                label="Email*"
                autoFocus
                value={values.email}
                onChange={handleChange}
                error={errors.email}

              />
              {errors.email && <p className="errormessage">{errors.email}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                variant="outlined"
                fullWidth
                id="confirmemail"
                label="Confirm Email*"
                name="confirmemail"
                value={values.confirmemail}
                onChange={handleChange}
                error={errors.confirmemail}

              />
              {errors.confirmemail && <p className="errormessage">{errors.confirmemail}</p>}
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
                value={values.password}
                onChange={handleChange}
                error={errors.password}


              />
              {errors.password && <p className="errormessage">{errors.password}</p>}
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
                value={values.confirmpassword}
                onChange={handleChange}
                error={errors.confirmpassword}

              />
              {errors.confirmpassword && <p className="errormessage">{errors.confirmpassword}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="role"
                name="role"
                variant="outlined"
                fullWidth
                id="role"
                label="Role"
                autoFocus
                value={values.role}
                onChange={handleChange}
                // error={errors.role}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
                    <InputLabel shrink id="state">
                    Categories*
                    </InputLabel>
                    <Select
                    name="categories"
                    variant="outlined"
                    label="categories"
                    id="categories"
                    value={values.categories}
                    className={classes.select}
                    onChange={handleChange}
                error={errors.categories}

                    >
                    <MenuItem value={"electrical"}>Electrical</MenuItem>
                    <MenuItem value={""}>Installer</MenuItem>
                    <MenuItem value={""}></MenuItem>

                    </Select>
                </FormControl>
                {errors.categories && <p className="errormessage">{errors.categories}</p>}
            </Grid>
            <Grid item xs={12} sm={12} className={classes.description}>
              <TextField
                autoComplete="text"
                variant="outlined"
                fullWidth
                id="Description"
                label="description"
                name="description"
                value={values.description}
                onChange={handleChange}

              />
            </Grid>
            
          </Grid >
          <Grid container className={classes.buttonContainer}>
              <Grid item xs ={4}>
                <Button 
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign Up
                </Button>
              </Grid>
              <Grid item xs ={4}>
                <Button 
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.submit}
                >
                Cancel
                </Button>
              </Grid>


          </Grid>
            

          </form>
        </div>
      </Grid>
    </Grid>
  );
}