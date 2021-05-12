import hst from './index'
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"
import "firebase/firebase-firestore"
import 'firebase/storage'
import boot from 'app/hst.conf';
import { Notify } from 'quasar'


firebase.initializeApp(boot.firebaseConfig);

class Auth {

    photoURL = "https://kstu.edu.tr/kstu-file/uploads/default-user-image.png";

    onAuthStateChanged() {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user !== null) {
                    hst.store().collection("users").where("uid", "=", user.uid).get().then(res => {
                        var data = {
                            firebase: user,
                            hst: res.data
                        }
                        resolve(data);
                    });
                } else {
                    reject({ error: "404", message: "Kullanıcı bulunamadı." });
                }
            })
        });
    }

    signInWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
                hst.store().collection("users").where("uid", "=", user.user.uid).get().then(res => {
                    var data = {
                        firebase: user,
                        hst: res[0]
                    }
                    resolve(data);
                }).catch(err => {
                    reject(err);
                });
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            })
        });
    }

    createUserWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
                // E mail doğrulama talebi var mı ?
                if (boot.auth.emailVerification) {
                    // Doğrulama için kullanıcı Id bilgisinin onay linkine verilmesi
                    boot.auth.actionCodeSettings.url = window.location.origin + boot.auth.actionCodeSettings.url
                    boot.auth.actionCodeSettings.url += response.user.uid;
                    // E mail onaylama sistemi
                    response.user.sendEmailVerification(boot.auth.actionCodeSettings).then(verification => {
                        window.localStorage.setItem('emailForSignIn', email);
                        resolve(response);
                    });
                    response.emailVerificationURL = boot.auth.emailVerificationURL;
                    resolve(response);
                }
            }).catch(err => {
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
                reject(err);
            })
        })
    }

    updateProfile(displayName, photoURL) {
        return new Promise((resolve, reject) => {
            if (photoURL === undefined) {
                photoURL = this.photoURL;
            }
            firebase.auth().onAuthStateChanged(user => {
                user.updateProfile({ displayName: displayName, photoURL: photoURL }).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                });
            });
        })
    }

    sendEmailVerification() {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user !== null) {
                    // Doğrulama için kullanıcı Id bilgisinin onay linkine verilmesi
                    boot.auth.actionCodeSettings.url = window.location.origin + boot.auth.actionCodeSettings.url
                    boot.auth.actionCodeSettings.url += user.uid;
                    user.sendEmailVerification(boot.auth.actionCodeSettings).then(verification => {
                        window.localStorage.setItem('emailForSignIn', user.email);
                        resolve(verification)
                    });
                } else {
                    reject({ error: "404", message: "Kullanıcı bulunamadı." })
                }
            })
        })
    }

    logout() {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut();
            resolve();
        });
    }

    errorCode(err) {
        if (err.code === "auth/invalid-email") {
            Notify.create({
                message: "Girilen E-Posta adresinde bir sorun var.",
                color: "red",
            });
        } else if (err.code === "auth/weak-password") {
            Notify.create({
                message: "Girilen şifre 6 karakterden uzun olmalıdır.",
                color: "red",
            });
        } else if (err.code === "auth/email-already-in-use") {
            Notify.create({
                message: "Bu E-posta adresi zaten kullanılıyor.",
                color: "red",
            });
        } else if (err.code === "auth/argument-error") {
            Notify.create({
                message: "Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.",
                color: "red",
            });
        } else if (err.code === "auth/wrong-password") {
            Notify.create({
                message: "Şifreniz hatalı.",
                color: "red",
            });
        }
    }


}


export default new Auth();