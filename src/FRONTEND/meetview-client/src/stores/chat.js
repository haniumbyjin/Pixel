import { observable } from 'mobx';

export default class ChatStore {
    constructor(root) {
        this.root = root;
    }
    
    @observable test = "text for testing"

}