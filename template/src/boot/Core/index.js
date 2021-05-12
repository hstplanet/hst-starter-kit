import store from './store';
import auth from './auth';

class HSTCore {

    store() {
        return store;
    }

    auth() {
        return auth;
    }

    database() {}

    storage() {}

    initializeApp() {}

}



export default new HSTCore();