import hst from 'boot/Core';

export default class AuthModel {

    user = {
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        lastname: "",
        photoURL: ""
    }


    createAccount() {
        return new Promise((resolve, reject) => {
            hst.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(res => {
                var displayName = this.user.name + " " + this.user.lastname;
                hst.auth().updateProfile(displayName, this.user.photoURL);

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
            hst.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(res => {
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