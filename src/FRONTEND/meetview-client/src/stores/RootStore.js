import ChatStore from './chat';

class RootStore {
    constructor() {
        this.chat = new ChatStore(this);
    }
}

export default RootStore;