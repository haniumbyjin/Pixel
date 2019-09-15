import { observable } from 'mobx';

const ChatStore = observable({
    data : [],
});

export default ChatStore;
// export default class ChatStore {
//     @observable test = "text for testing"
//     @observable id = 2;
//     @observable data = [
//         // {
//         //     id: 0,
//         //     user_uid: 'User1',
//         //     content: 'hi',
//         //     send_date: '19/06/02 15:20'
//         // },
//         // {
//         //     id: 1,
//         //     user_uid: 'Uesr2',
//         //     content: 'hello',
//         //     send_date: '19/06/02 15:20'
//         // },
//         // {
//         //     user_uid: 'Uesr2',
//         //     content: 'hello',
//         //     send_date: '19/06/02 15:20'
//         // },
//         // {
//         //     user_uid: 'Uesr2',
//         //     content: 'hello',
//         //     send_date: '19/06/02 15:20'
//         // },
//         // {
//         //     user_uid: 'Uesr2',
//         //     content: 'hello',
//         //     send_date: '19/06/02 15:20'
//         // },
//         // {
//         //     user_uid: 'Uesr2',
//         //     content: 'hello',
//         //     send_date: '19/06/02 15:20'
//         // },
//         // {
//         //     user_uid: 'Uesr2',
//         //     content: 'hello',
//         //     send_date: '19/06/02 15:20'
//         // },
//         // {
//         //     user_uid: 'Uesr2',
//         //     content: 'hello',
//         //     send_date: '19/06/02 15:20'
//         // }
//     ];

//     constructor(root){
//         this.root = root;
//     }

// }