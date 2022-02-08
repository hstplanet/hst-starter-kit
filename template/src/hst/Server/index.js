import Auth from "hst/Server/Auth";
import Storage from "hst/Server/Storage";
import Store from "hst/Server/Store";
import Socket from "hst/Server/Socket";

export default class Serive {
    
    auth = Auth;
    store = new Store();
    storage = Storage;
    socket = Socket;

}
