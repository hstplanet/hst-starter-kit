import { date, uid, Notify, LocalStorage, SessionStorage, LoadingBar } from "quasar";
import CityTown from "./CityTown";

class Util {

    date = date;
    uid = uid;
    notify = Notify;
    LocalStorage = LocalStorage;
    SessionStorage = SessionStorage;
    LoadingBar = LoadingBar;
    email() { };
    math() { };
    location = CityTown

}

export default new Util();