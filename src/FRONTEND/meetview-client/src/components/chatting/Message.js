/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',      
    },
    date: {
        marginBottom: '7px',
    },
    chat: {
        padding: '10px',
        margin: '7px',
        maxWidth:400
    },
 });

 const Message = ((props) => {
    //console.log("this messages" + JSON.stringify(props.info));
    const {classes} = props;
    const {
        content, userId, sendDate, fileName, file
    } = props.info
    
    const fileDownload = (e) => {
        const downloadurl = 'http://localhost:8080/files/download/' + fileName;
        axios.request({
            url: downloadurl,
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));            
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            console.log('upload download!!');
          });
        
    }
    
    function Content(props) {
        const isFile = props.isFile;
        if(isFile)
            return <a href="#" onClick={fileDownload}>{fileName}</a>;
        else
            return <div>{content}</div>;
    }
    return (
        <div className={classes.root}>
            <Grid container                
            direction="row"
            alignItems="flex-end">
                <Grid item>
                    <Paper className={classes.chat}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>                            
                            <Grid xs item>                                
                                <Typography gutterBottom color="textSecondary" noWrap>
                                    {userId}
                                </Typography>
                                <Typography gutterBottom>
                                    <Content isFile={file}/>                                
                                </Typography>                                
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Grid item xs className={classes.date}>
                        {sendDate}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
});

export default (withStyles(styles)(Message));
//export default withStyles(styles)(Message);