module.exports = {

    host: "http://localhost:8080/",
{{#preset.firebase}}
    firebaseConfig: {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    },
{{/preset.firebase}}
{{#preset.hstcore}}
    hstcloud: {
        apiKey: "{{name}}",
        projectId: "{{name}}-{{projectId}}",
        storageBucket: "{{storageBucket}}",
        messagingSenderId: "{{messagingSenderId}}",
        appId: "1:{{projectId}}:web:1620989959022",
        measurementId: "H-{{measurementId}}"
    },
{{/preset.hstcore}}
    auth: {
        emailVerification: true,
        emailVerificationURL: "/mailverified",
        resetPasswordURL: "login/password-new",
        actionCodeSettings: {
            url: "/mailverifiedok?Id=",
            handleCodeInApp: true
        },
        errorNotify: true
    }

}