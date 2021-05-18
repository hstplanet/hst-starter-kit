class Store {

    collectionPath = "";
    path = "http://server.hstplanet.com/api/store"

    collection(collection) {
        this.collectionPath = collection;
        return this;
    }

    get() {
        return new Promise((resolve, reject) => {
            this.$axios.post(this.path + "/get?projectId={{projectId}}&model=" + this.collectionPath).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    where(attr, query, value) {
        this.collectionPath += '&where=' + "?" + attr + query + value;
        return this;
    }

    set(value) {
        return new Promise((resolve, reject) => {
            this.$axios.post(this.path + "/post?projectId={{projectId}}&model=" + this.collectionPath, value).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    update(value) {
        return new Promise((resolve, reject) => {
            this.$axios.post(this.path + "/patch?projectId={{projectId}}&model=" + this.collectionPath, value).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(value) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(this.path + "/delete?projectId={{projectId}}&model=" + this.collectionPath, value).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

}


export default new Store();