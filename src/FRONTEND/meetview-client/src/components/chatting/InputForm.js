import React, { useState, Fragment } from 'react';
import {withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { IconButton } from "@material-ui/core";
import { post } from 'axios';

const styles = theme => ({
    root: {
      padding: 10,
      width: "30%",
    },
    textField: {
      marginLeft: "10px",
      marginRight: "10px",
      width: "70%",
    },
    button: {
      marginTop: "10px",
    },
    
});

function InputForm(props) {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [fileSize, setFileSize] = useState(null);
    const [userId, setUserId] = useState("알수없음");
    const [content, setContent] = useState("");
    const [sendDate, setSendDate] = useState(null);


    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        const currdate = getCurrentDate();
        var send_message = {
            "userId": userId,
            "content": content,
            "sendDate": currdate
        }        
        setSendDate(currdate);
        setContent("");

        props.sendMessage(send_message);        
    }

    function getCurrentDate() {
        const date = new Date();
        const currentDate = date.getHours()+" : "+date.getMinutes();
        console.log("currentDate : "+currentDate);
        return currentDate;
    }

    function onFileSubmit(e){
        e.preventDefault(); // Stop form submit
        fileUpload().then(response => {
            console.log('success',response.data);
        });
    }
    function fileUpload(filearray){
        const url = 'http://localhost:8080/files/upload-multiple-files';
        const formData = new FormData();
        formData.append('files',filearray[0]);
        console.log('upload file!!', filearray[0]);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers": "*",
            }
        };
        return post(url, formData, config);
    }
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileType(e.target.files[0].type);
        setFileName(e.target.files[0].name);
        setFileSize((e.target.files[0].size/1024).toFixed(2));
        console.log('file!!', e.target.files[0]);
        console.log("file info : " + file + fileName + " " + fileType + " " + fileSize);
        fileUpload(e.target.files);
    };
    const {classes} = props;
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-full-width"
                    className={classes.textField}
                    variant="outlined"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={content}
                    onChange={handleChange}
                    name="content"
                />
                <Button type="submit" variant="outlined" className={classes.button} disabled={content === ""}>
                    전송
                </Button>

                <form onSubmit={onFileSubmit}>
                    <input                                
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={onFileChange}
                        style={{ display: "none" }}
                    />

                    <label htmlFor="contained-button-file">
                        <IconButton
                            className={classes.button}
                            variant="contained"
                            component="span"
                            type="submit"
                        >
                            <CloudUploadIcon />
                        </IconButton>
                    </label>
                </form>
            </form>
        </Fragment>
    );
}

//export default withStyles(styles)(InputForm);
export default (withStyles(styles)(InputForm));