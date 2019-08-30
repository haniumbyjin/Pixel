import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import axios, { post } from "axios";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {

    },
    form: {

    },
    submit: {

    },
}));

export default function SignIn() {
    const classes = useStyles();

    const [userId, setUserId] = useState();
    const [userPassword, setUserPassword] = useState();


    const submitUserLogin = (e) => {
        const url = "http://localhost:8080/users/user";
        console.log(e);
        const config = {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            },
            body: {
                "username": userId,
                "password": userPassword
            },
        };
        return post(url, config);
    };

    const getToken = () => {
        const url = "http://localhost:8080/oauth/token";
        const config = {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            },
            body: {
                "username": userId,
                "password": userPassword,
                "grant_type": "password"
            },
        };
        return post(url, config);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        getToken();
        // submitUserLogin(e);
    };

    const onChangeIdInput = (e) => {
        setUserId(e.target.value);
    };

    const onChangePassInput = (e) => {
        setUserPassword(e.target.value)
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={onFormSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onChangeIdInput}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onChangePassInput}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Link to="/Home">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onFormSubmit}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/Home">
                                비밀번호 찾기
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/Home">
                                {"회원가입"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}