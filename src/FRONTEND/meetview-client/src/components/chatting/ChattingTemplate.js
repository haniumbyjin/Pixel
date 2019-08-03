import React, { Component, Fragment } from 'react';
import SockJsClient from "react-stomp";
import Fetch from "json-fetch";
import ChattingList from './ChattingList';
import InputForm from './InputForm';
import { inject, observer } from 'mobx-react';

@inject(stores => ({
    data: stores.chat.data,
    clientConnected: stores.chat.clientConnected,
}))

@observer
class ChattingTemplate extends Component {

    onMessageReceive = (msg, topic) => {
        console.log("Chatting Template - onMessageReceive");
        //alert(JSON.stringify(msg) + " @ " + JSON.stringify(topic));
        this.props.data.push(msg);
        console.log(this.props.data);
        // this.setState(prevState => ({
        //     messages: [...prevState.messages, msg]
        // }));
    }

    sendMessage = (newMsg) => {
        console.log("Chatting Template - sendMessage");
        try {
            var send_message = {
                "user_uid": newMsg.user_uid,
                "content": newMsg.content,
                "send_date": newMsg.send_date
            }
            this.clientRef.sendMessage("/app/message", JSON.stringify(send_message));
            return true;
        } catch (e) {
            return false;
        }
    }

    componentWillMount() {
        console.log("call history");
        Fetch("/history", {
            method: "GET"
        }).then((response) => {
            console.log(response.body);
            response.body.map(chat => (
                this.props.data.push(chat)
            ));
        });
    }

    render() {
        const wsSourceUrl = "http://localhost:8080/chatting";
        return (
            <Fragment>
                <div style={{backgroundColor: "#FCFCFC", padding: "10px"}}>
                    <ChattingList />
                    <InputForm sendMessage = {this.sendMessage} />
                </div>
                <SockJsClient url={wsSourceUrl} topics={["/topic/public"]}
                    onMessage={this.onMessageReceive} ref={(client) => { this.clientRef = client }}
                    onConnect={() => { this.clientConnected = true; }}
                    onDisconnect={() => { this.clientConnected = false; }}
                    debug={false} style={[{ width: '100%', height: '100%' }]} />
            </Fragment>
        );
    }
}

export default ChattingTemplate;