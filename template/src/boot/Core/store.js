import axios from "axios";
import boot from "app/hst.conf"

class Store {

    collectionPath = ""

    collection(collection) {
        this.collectionPath = collection;
        return this;
    }

    get() {
        return new Promise((resolve, reject) => {
            console.log(boot.host + this.collectionPath);
            axios.get(boot.host + this.collectionPath).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    where(attr, query, value) {
        this.collectionPath += "?" + attr + query + value;
        return this;
    }

    set(value) {
        return new Promise((resolve, reject) => {
            axios.post(boot.host + this.collectionPath, value).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

}


export default new Store();