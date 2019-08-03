import React, { Component, Fragment } from 'react';
import {observer} from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    chat: {
      maxWidth: 350,
      height: "50px",
      margin: '5px',
      padding: '10px',
    },
 });

@observer
class Message extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {classes} = this.props;

        const {
            user_uid, content, send_date, fileName, rawData, timeStamp
        } = this.props.info

        return (
            <div className={classes.root}>
                <Paper className={classes.chat}>
                    <Grid container wrap="nowrap" spacing={3}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography color="textSecondary">
                                        {user_uid}
                                    </Typography>
                                    <Typography>
                                        {content}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography color="textSecondary">
                                {send_date}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Message);