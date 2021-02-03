import React, { useContext } from 'react'
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import firebase from 'firebase'

import {Context} from "../index";

function Login() {

    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
    }

    return (
        <Container>
            <Grid 
                container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                    style={{width: 400, background: 'lightgray'}}
                >
                    <Box p={5}>
                        <Button onClick={login} >Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
