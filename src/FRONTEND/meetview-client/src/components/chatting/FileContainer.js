import React, { useState, useEffect } from 'react';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { IconButton } from "@material-ui/core";
import axios, { post } from "axios";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    button: {
        backgroundColor: "#4cff5c",
    },
    container: {
        backgroundColor: "#ecf4ff",
    }

}));


export default function MainContainer() {

    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [fileSize, setFileSize] = useState(null);
    const [fileData, setFileData] = useState(null);


    const onFormSubmit = (e) => {
        e.preventDefault(); // Stop form submit
        fileUpload(file).then(response => {
            console.log('success',response.data);
        });
    };

    const fileUpload = (file) => {
        const url = "http://localhost:8080/upload";
        const formData = new FormData();
        formData.append("file", file);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
            }
        };
        console.log('sdfasdfasdfasdf',formData);
        return post(url, formData, config);
    };

    function readFile(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            let base64Encoded = btoa(unescape(encodeURIComponent(e.target.result)));
            console.log(base64Encoded);
            setFileData(btoa(unescape(encodeURIComponent(e.target.result))));
            console.log(fileData);
        };
        reader.readAsText(file);
    }

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileType(e.target.files[0].type);
        setFileName(e.target.files[0].name);
        setFileSize((e.target.files[0].size/1024).toFixed(2));
        console.log('file!!', e.target.files[0]);
        readFile(e)
        //onFormSubmit(e)
    };

    useEffect(() => {
        if (fileData) {
            console.log(fileData);
            setFileData(undefined);
        }
    }, [fileData])

    return (
        <div>
            <div>
                <Container maxWidth="sm" className={classes.container}>
                    <Typography component="div">
                        <div>파일이름 : {fileName}</div>
                        <div>파일타입 : {fileType}</div>
                        <div>파일크기 : {fileSize} {fileSize>0 ? "KB":""}</div>
                        <form onSubmit={onFormSubmit}>
                            <input                                
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={onChange}
                                style={{ display: "none" }}
                            />

                            <label htmlFor="contained-button-file">
                                <IconButton
                                    className={classes.button}
                                    variant="contained"
                                    component="span"
                                    type="submit"
                                >
                                    <CloudDownloadIcon />
                                </IconButton>
                            </label>
                        </form>
                    </Typography>
                </Container>
            </div>
        </div>
    );
}