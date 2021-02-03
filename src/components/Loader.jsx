import React from 'react'
import {Button, Container, Grid} from "@material-ui/core";

function Loader() {
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
                >
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader
