import React , { useState } from 'react';
import ListItems from '../components/ListItems';
import FileContainer from '../components/FileContainer';
import ChattingTemplate from '../components/chatting/ChattingTemplate';

export default function Home() {

    return(
        <div>            
            <ListItems/>
            <FileContainer/>
        </div>
    );
}
