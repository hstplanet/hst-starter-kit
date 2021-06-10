import hst from 'boot/Core';
import { Notify } from 'quasar';

export default class AuthModel {

    attributes = {
        name: "",
        lastname: "",
        password: "",
        confirmPassword: "",
        photoURL: "",
        email: "",
        phone: "",
        profile: null,
    }

    createAccount() {
        return new Promise((resolve, reject) => {
            hst.auth().createUserWithEmailAndPassword(this.attributes.email, this.attributes.password).then(res => {

                // Kullanıcı bilgilerinde güncelleme yapılacaksa kullanın..
                var displayName = this.attributes.name + " " + this.attributes.lastname;
                hst.auth().updateProfile(displayName, this.attributes.photoURL, this.attributes.phone).then(() => {
                    // Onay Maili Gönderilmesi
                    hst.auth().sendEmailVerification();
                });

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
                console.log(res);
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
            hst.auth().logout().then((e) => {
                resolve(e);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    sendEmailVerification() {
        return new Promise((resolve, reject) => {
            hst.auth().onAuthStateChanged().then(user => {
                hst.auth().sendEmailVerification(user.emailAddress).then(res => {
                    Notify.create({
                        message: "Sıfırlama E-Postası Gönderildi.",
                        color: "green",
                    });
                    resolve(res);
                });
            })
        })

    }

    emailVerification(token) {
        return new Promise((resolve, reject) => {
            hst.auth().emailVerification(token).then(res => {
                resolve();
            }).catch(() => {
                reject();
            });

        })
    }

    onAuthStateChanged() {
        return new Promise((resolve, reject) => {
            hst.auth().onAuthStateChanged().then(res => {
                resolve(res)
            }).catch(err => {
                reject(err);
            });
        });
    }

    resetPassword() {
        return new Promise((resolve, reject) => {
            hst.auth().resetPassword(this.attributes.email).then(() => {
                resolve();
            }).catch(() => {
                reject();
            })
        })
    }

    sendNewPassword(token) {
        return new Promise((resolve, reject) => {
            hst.auth().sendNewPassword(token, this.attributes.password).then(() => {
                resolve();
            }).catch(() => {
                reject();
            })
        })
    }

}