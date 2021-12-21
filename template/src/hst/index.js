import Server from "hst/Service";
import Util from "hst/Util";
import conf from "app/hst.conf";

export default class HST {

    server = new Server();
    util = Util;
    conf = conf;

}