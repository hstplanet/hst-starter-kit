module.exports = {

    host: "http://localhost/",
{{#preset.firebase}}
    firebaseConfig: {
        apiKey: "AIzaSyDKMzGCwXGkibcxz5td59LD17CrJoUVRAc",
        authDomain: "cetas-164c3.firebaseapp.com",
        databaseURL: "https://hayalimdekiis-b4bd2-default-rtdb.firebaseio.com",
        projectId: "cetas-164c3",
        storageBucket: "cetas-164c3.appspot.com",
        messagingSenderId: "678488584058",
        appId: "1:678488584058:web:6ba58fa7e3cf7f995ef0c3",
        measurementId: "G-2FE53R01TK"
    },
{{/preset.firebase}}
{{#preset.hstcore}}
    hstcloud: {
        apiKey: "dasdad",
        projectId: "dasdad-3441478484",
        storageBucket: "6359313338",
        messagingSenderId: "2820913033",
        appId: "1:3441478484:web:1620989959022",
        measurementId: "H-4485436514"
    },
{{/preset.hstcore}}
    auth: {
        emailVerification: true,
        emailVerificationURL: "/mailverified",
        actionCodeSettings: {
            url: "/mailverifiedok?Id=",
            handleCodeInApp: true
        },
        errorNotify: true
    }

}