import React , { useState } from 'react';
import ListItems from '../components/ListItems';
import MainContainer from '../components/MainContainer';
import ChattingTemplate from '../components/chatting/ChattingTemplate';

export default function Home() {

    return(
        <div>
            <ListItems/>
            <MainContainer/>
            {/* <ChattingTemplate /> */}
        </div>
    );
}