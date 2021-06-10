import boot from 'app/hst.conf';
import { Notify, Cookies } from 'quasar';
import axios from 'axios';

class Auth {

    // OK
    onAuthStateChanged() {
        return new Promise((resolve, reject) => {
            if (Cookies.get('auth') === null) {
                reject(null);
            } else {
                axios.post("http://server.hstplanet.com/api/auth/onAuthStateChanged?projectId=" + boot.hstcloud.projectId.split("-")[1], { token: Cookies.get('auth') }).then(res => {
                    var data = res.data;
                    if (data.err !== undefined) {
                        reject(null);
                        if (boot.auth.errorNotify) {
                            // Hata kodları
                            this.errorCode(data);
                        }
                    } else {
                        resolve(data)
                    }
                }).catch(err => {
                    reject(null);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(err);
                    }
                });
            }
        });
    }

    // OK
    signInWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            var data = {
                emailAddress: email,
                password: password,
                auth: boot.auth,
                baseUrl: boot.host
            }
            axios.post("http://server.hstplanet.com/api/auth/signin?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    resolve(data)
                    Cookies.set('auth', data.token, this.cookiesOption());
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
    createUserWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            var data = {
                emailAddress: email,
                password: password,
                auth: boot.auth,
                baseUrl: boot.host
            }
            axios.post("http://server.hstplanet.com/api/auth/signup?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    resolve(data)
                    Cookies.set('auth', data.token, this.cookiesOption());
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
    updateProfile(displayName, photoURL, phone, user) {
        return new Promise((resolve, reject) => {
            var updateData = {
                fullName: displayName,
                photoURL: photoURL,
                phone: phone,
                user: user,
                token: Cookies.get('auth')
            }
            axios.post("http://server.hstplanet.com/api/auth/update?projectId=" + boot.hstcloud.projectId.split("-")[1], updateData).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    resolve(data)
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
    sendEmailVerification() {
        return new Promise((resolve, reject) => {
            var data = {
                token: Cookies.get('auth'),
                baseUrl: boot.host,
                auth: boot.auth
            }
            axios.post("http://server.hstplanet.com/api/auth/sendEmailVerification?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    resolve(data)
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
    emailVerification(token) {
        return new Promise((resolve, reject) => {
            var data = {
                activeToken: token,
                token: Cookies.get('auth'),
                baseUrl: boot.host,
                auth: boot.auth
            }
            axios.post("http://server.hstplanet.com/api/auth/emailVerification?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    resolve(data)
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
    resetPassword(email) {
        return new Promise((resolve, reject) => {
            var data = {
                email: email,
                baseUrl: boot.host,
                auth: boot.auth
            }
            axios.post("http://server.hstplanet.com/api/auth/resetPassword?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    resolve(data)
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
    sendNewPassword(token, password) {
        return new Promise((resolve, reject) => {
            var data = {
                token: token,
                password: password
            }
            axios.post("http://server.hstplanet.com/api/auth/sendNewPassword?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    resolve(data)
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
    logout() {
        return new Promise((resolve, reject) => {
            var data = { token: Cookies.get('auth') }
            axios.post("http://server.hstplanet.com/api/auth/logout?projectId=" + boot.hstcloud.projectId.split("-")[1], data).then(res => {
                var data = res.data;
                if (data.err !== undefined) {
                    reject(data);
                    if (boot.auth.errorNotify) {
                        // Hata kodları
                        this.errorCode(data);
                    }
                } else {
                    Cookies.set('auth', "null", this.cookiesOption());
                    resolve(data);
                }
            }).catch(err => {
                reject(err);
                if (boot.auth.errorNotify) {
                    // Hata kodları
                    this.errorCode(err);
                }
            });
        });
    }

    // OK
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
                message: "E Posta veya şifre hatalı.",
                color: "red",
            });
        } else if (err.code === "auth/user-found") {
            Notify.create({
                message: "Kullanıcı bulunamadı Üye değilseniz üye olabilirsiniz.",
                color: "red",
            });
        } else if (err.code === "emailAlreadyInUse") {
            Notify.create({
                message: "Bu eposta adresi kullanılıyor.",
                color: "red",
            });
        }
    }

    // OK
    cookiesOption() {
        return {
            expires: 10,
            path: "/",
            secure: true
        }
    }


}


export default new Auth();