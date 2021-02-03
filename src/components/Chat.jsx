import React, { useState, useContext } from 'react'
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from 'firebase'

import {Context} from "../index";
import Loader from "./Loader";

function Chat() {
    const { auth, firestore } = useContext(Context)
    const [ user ] = useAuthState(auth);
    const [ messages, loading ] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const [inputValue, setInputValue] = useState('')


    const updatingInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: inputValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInputValue('')
    };

    console.log(messages);
    if(loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50, marginTop: 20}}
                justify={"center"}
            >
                {/* Background */}
                <div style={{width: '80%', height: '68vh', border: '1px solid lightgray', overflowY: 'auto', borderRadius: 10}}>
                    {messages.map(message => {
                        return(
                            <div style={{
                                mardin: 10,
                                border: user.uid 
                                        ? user.uid === message.uid ? '1px solid blue' : '1px solid lightgray'
                                        : '1px solid lightgray',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                width: 'fit-content'
                            }}>
                                <Grid container>
                                    <Avatar src={message.photoURL} />
                                    <div>{message.displayName}</div>
                                </Grid>
                                <div>{message.text}</div>
                            </div>
                        )
                    })}
                </div>
                {/* Input */}
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                >
                    <TextField
                        rowsMax={2}
                        fullWidth
                        variant={'outlined'}
                        value={inputValue}
                        onChange={updatingInputValue}
                    />
                    <Button onClick={sendMessage} variant={'outlined'}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat


const styles = {
    width: '80%', 
    height: '68vh', 
    border: '1px solid lightgray', 
    overFlowY: 'auto',
    borderRadius: 10
}
