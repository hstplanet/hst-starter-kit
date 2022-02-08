import Server from "hst/Server";
import Util from "hst/Util";
import conf from "app/hst.conf";

export default class HST {

    server = new Server();
    util = Util;
    conf = conf;

}