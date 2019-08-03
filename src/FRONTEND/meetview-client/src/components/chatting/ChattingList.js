import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Message from './Message';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/styles';
import InfiniteScroll from 'react-infinite-scroll-component';

const styles = theme => ({
    chat_list: {
        width: 700,
        height: 400,
        border: '1px gray',
        padding: '5px',
        margin: '10px',
    },
    scroll_div: {
        height: 400,
    },
});

@inject(stores => ({
    data: stores.chat.data
}))

@observer
class ChattingList extends Component {
    state = {
        value:'',
        fetchData: 10,
    }

    render(){
        const {classes} = this.props;
        
        const chatList = this.props.data.map(info => (
            <Message key={info.id} info={info} />
        ));

        const chatting =(   
                <div className={classes.scroll_div}>
                    {chatList}
                </div>
        )

        return(
            <Paper className={classes.chat_list}>
                <InfiniteScroll
                throttle={100}
                threshold={300}
                // dataLength={chatList.length} //This is important field to render the next data
                next={this.state.fetchData}
                hasMore={true}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                initialScrollY={0}
                refreshFunction={this.refresh}
                >
                    <div className={classes.scroll_div}>
                        {chatList}
                    </div>
                </InfiniteScroll>
            </Paper>
            
        );
    }
}

export default withStyles(styles)(ChattingList);