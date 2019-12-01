import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import Message from './Message';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/styles';
import InfiniteScroll from 'react-infinite-scroller';

const styles = theme => ({
    chat_list: {
        width: 700,
        height: 500,
        border: '1px gray',
        margin: '10px',
    },
    scroll_div: {
        height: 400,
    },
});

const ChattingList = inject("chat")(observer((props) => {
    const {classes} = props;
    const fetchMoreData = () => {
        console.log("more data");
    };    
    return(
        <Paper className={classes.chat_list}>
            <InfiniteScroll
                //dataLength={this.state.items.length}
                pageStart={0}
                loadMore={fetchMoreData}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={true}
                style={{height:"500px", overflow:"scroll"}}
            >
                <div style={{}}>
                {props.chat.data.map((info, index) => (
                    <div key={index}>
                        <Message info={info} />
                    </div>
                ))}
                </div>
            </InfiniteScroll>            
        </Paper>        
    );  
}));

//export default withStyles(styles)(ChattingList);
export default (withStyles(styles)(ChattingList));