import HST from "hst/index"
import axios from "axios";

class Storage {

    uploadFile(file) {
        const hst = new HST();
        return new Promise((resolve, reject) => {
            hst.server.auth.onAuthStateChanged().then(user => {
                var formData = new FormData();
                formData.set("avatar", file);
                axios.post(hst.conf.server + "service/storage/upload/" + user.id, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        });
    }

    uploadBlob(blob) {
        const hst = new HST();
        return new Promise((resolve, reject) => {
            hst.server.auth.onAuthStateChanged().then(user => {
                var formData = new FormData();
                formData.set("avatar", new File([blob], "file.jpg"));
                axios.post(hst.conf.server + "service/storage/upload/" + user.id, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        });
    }

}

export default new Storage();