import Auth from "hst/Service/Auth";
import Storage from "hst/Service/Storage";
import Store from "hst/Service/Store";
import Socket from "hst/Service/Socket";

export default class Serive {
    
    auth = Auth;
    store = new Store();
    storage = Storage;
    socket = Socket;

}
