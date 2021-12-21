import { date, uid, Notify, LocalStorage, SessionStorage, LoadingBar } from "quasar";
import CityTown from "./CityTown";
import Currency from "./Currency"
class Util {

    date = date;
    uid = uid;
    notify = Notify;
    LocalStorage = LocalStorage;
    SessionStorage = SessionStorage;
    LoadingBar = LoadingBar;
    email() { };
    math() { };
    location = CityTown;
    currency = new Currency();

}

export default new Util();