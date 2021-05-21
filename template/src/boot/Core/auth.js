import boot from 'app/hst.conf';
import { Notify, SessionStorage } from 'quasar'
class Auth {

    onAuthStateChanged() {
        return new Promise((resolve, reject) => {
            resolve(SessionStorage.getItem("auth"))
        });
    }

    signInWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            var data = {
                emailAddress: email,
                password: password,
                auth: boot.auth,
                baseUrl: boot.host
            }
            this.$axios.post("http://server.hstplanet.com/api/auth/signin?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                resolve(user)
                SessionStorage.set("auth", user);
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    createUserWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            var data = {
                emailAddress: email,
                password: password,
                auth: boot.auth,
                baseUrl: boot.host
            }
            this.$axios.post("http://server.hstplanet.com/api/auth/signup?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                resolve(user)
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    updateProfile(displayName, photoURL, phone) {
        return new Promise((resolve, reject) => {
            var data = {
                auth: boot.auth,
                baseUrl: boot.host,
                fullName: displayName,
                photoURL: photoURL,
                phone: phone
            }
            this.$axios.post("http://server.hstplanet.com/api/auth/update?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                resolve(user)
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    sendEmailVerification() {
        return new Promise((resolve, reject) => {
            var data = SessionStorage.getItem("auth");
            this.$axios.post("http://server.hstplanet.com/api/auth/sendEmailVerification?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                resolve(user)
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            var data = {}
            this.$axios.post("http://server.hstplanet.com/api/auth/signup?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                resolve(user)
                SessionStorage.set("auth", null);
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
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