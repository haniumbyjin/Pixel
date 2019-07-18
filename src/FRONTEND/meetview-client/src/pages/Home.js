import React , { useState } from 'react';
import ListItems from '../components/ListItems';
import MainContainer from '../components/MainContainer';

export default function Home() {

    return(
        <div>
            <ListItems/>
            <MainContainer/>
        </div>
    );
}