import axios from "axios";
import HST from "hst/index";

export default class Currency {


    constructor() {

    }

    getDolar() {
        return new Promise(function (resolve, reject) {
            const hst = new HST();
            axios.get(hst.conf.server + "service/currency/get").then((response) => {
                var currency = response.data;
                console.log(currency);
                var index = currency.findIndex(e => e.$.Kod === "USD");
                if (index > -1) {
                    resolve(currency[index])
                }
                reject();
            });
        });
    }

    getEuro() {
        return new Promise(function (resolve, reject) {
            const hst = new HST();
            axios.get(hst.conf.server + "service/currency/get").then((response) => {
                var currency = response.data;
                var index = currency.findIndex(e => e.$.Kod === "EUR");
                if (index > -1) {
                    resolve(currency[index])
                }
                reject();
            });
        });
    }
}