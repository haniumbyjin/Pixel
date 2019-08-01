import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

@inject('chat')

@observer
class ChattingTemplate extends Component {
    render(){
        const {chat} = this.props;
        return(
            <div>
                {chat.test}
            </div>
        );
    }

}

export default ChattingTemplate;