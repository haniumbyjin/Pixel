import { observable } from 'mobx';

export default class ChatStore {
    @observable test = "text for testing"
    @observable id = 2;
    @observable data = [
        // {
        //     id: 0,
        //     user_uid: 'User1',
        //     content: 'hi',
        //     send_date: '19/06/02 15:20'
        // },
        // {
        //     id: 1,
        //     user_uid: 'Uesr2',
        //     content: 'hello',
        //     send_date: '19/06/02 15:20'
        // },
        // {
        //     user_uid: 'Uesr2',
        //     content: 'hello',
        //     send_date: '19/06/02 15:20'
        // },
        // {
        //     user_uid: 'Uesr2',
        //     content: 'hello',
        //     send_date: '19/06/02 15:20'
        // },
        // {
        //     user_uid: 'Uesr2',
        //     content: 'hello',
        //     send_date: '19/06/02 15:20'
        // },
        // {
        //     user_uid: 'Uesr2',
        //     content: 'hello',
        //     send_date: '19/06/02 15:20'
        // },
        // {
        //     user_uid: 'Uesr2',
        //     content: 'hello',
        //     send_date: '19/06/02 15:20'
        // },
        // {
        //     user_uid: 'Uesr2',
        //     content: 'hello',
        //     send_date: '19/06/02 15:20'
        // }
    ];
    @observable clientConnected = false;

    constructor(root){
        this.root = root;
    }

}