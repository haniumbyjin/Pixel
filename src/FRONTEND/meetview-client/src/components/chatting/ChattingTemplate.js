import React, { useState, Fragment, useEffect } from 'react';
import SockJsClient from "react-stomp";
import Fetch from "json-fetch";
import ChattingList from './ChattingList';
import InputForm from './InputForm';
import { inject, observer, useLocalStore } from 'mobx-react';

const ChattingTemplate = inject("chat")(props => {
    const [clientRef, setClientRef] = useState(null);
    const [clientConnected, setClientConnected] = useState(null);
    const onMessageReceive = (msg, topic) => {
        //console.log("Chatting Template - onMessageReceive");      
        props.chat.data.push(msg);
        console.log("send message : " + topic + JSON.stringify(msg));
    }

    const sendMessage = (newMessage) => {
        try {
            clientRef.sendMessage("/app/message", JSON.stringify(newMessage));
            return true;
        } catch (e) {
            return false;
        }
    }
    useEffect(() => { GetHistory(); }, []);
    function GetHistory() {
        console.log("call history");
        Fetch("/history", {
            method: "GET"
        }).then((response) => {
            //console.log("history message :" + JSON.stringify(response.body));
            response.body.map((chat) => {
                props.chat.data.push(chat);
                return true;
            });
        });
    }
    const wsSourceUrl = "http://localhost:8080/chatting";
    return (
        <Fragment>
            <div style={{backgroundColor: "#FCFCFC", padding: "10px"}}>
                <ChattingList />
                <InputForm sendMessage = {sendMessage}/>
            </div>
            <SockJsClient url={wsSourceUrl} topics={["/topic/public"]}
                onMessage={onMessageReceive} ref={(client) => { setClientRef(client) }}
                onConnect={() => { setClientConnected(true);}}
                onDisconnect={() => { setClientConnected(false); }}
                debug={false} style={[{ width: '100%', height: '100%' }]} />
        </Fragment>
    );    
});

export default ChattingTemplate;