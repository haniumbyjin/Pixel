import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import {withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

@observer
class InputForm extends Component {
    state = {
        user_uid: 'user_uid?nickname',
        content: '',
        send_date: 'send_date'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //각 name에 맞는 value값 대입
        })
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();

        const currdate= this.currentDate();
        this.setState({
            send_date: currdate
        })
        this.props.sendMessage(this.state);

        // 상태 초기화( + inputform 비우기)
        //e.target.value = "";
        this.setState({ content: '' });

    }

    currentDate = () => {
        const date = new Date();
        const currentDate = date.getHours()+" : "+date.getMinutes();
        console.log("currentDate : "+currentDate);
        return currentDate;
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="outlined-full-width"
                        className={classes.textField}
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={this.state.content}
                        onChange={this.handleChange}
                        name="content"
                    />
                    <Button type="submit" variant="outlined" className={classes.button}>
                        전송
                    </Button>
                </form>
            </Fragment>

        );
    }
}

export default withStyles(styles)(InputForm);