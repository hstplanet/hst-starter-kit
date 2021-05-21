import hst from 'boot/Core';

export default class AuthModel {

    attributes = {
        name: "",
        lastname: "",
        password: "",
        confirmPassword: "",
        photoURL: "",
        email: "",
        phone: 0,
        user: null,
    }


    createAccount() {
        return new Promise((resolve, reject) => {
            hst.auth().createUserWithEmailAndPassword(this.attributes.email, this.attributes.password).then(res => {
                var displayName = this.attributes.name + " " + this.attributes.lastname;
                hst.auth().updateProfile(displayName, this.attributes.photoURL, this.attributes.phone);

                // Kullanıcının verilerini buradan veritabanınıza yazabilirsiniz.
                /*hst.store().collection("users").set(?).then(res => {
                    resolve(res;)
                });*/
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }

    login() {
        return new Promise((resolve, reject) => {
            hst.auth().signInWithEmailAndPassword(this.attributes.email, this.attributes.password).then(res => {
                resolve(res);

                // Kullanıcı girişi yapan kişiyi kendi veritabanınızdan alın.
                /*hst.store().collection("users").where("uid", "=", user.user.uid).get().then(user => {
                    var data = {
                        firebase: res, 
                        hst: user[0]
                    }
                    resolve(data);
                }).catch(err => {
                    reject(err);
                });*/
            }).catch(err => {
                reject(err)
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            hst.auth().logout().then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        })
    }

}