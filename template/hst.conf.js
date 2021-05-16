export default {

    host: "http://localhost/",
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
    hstcloud: {
        apiKey: "{{ name }}",
        projectId: "{{ name }}-164c3",
        storageBucket: "",
        messagingSenderId: "678488584058",
        appId: "1:678488584058:web:6ba58fa7e3cf7f995ef0c3",
        measurementId: "H-2FE53R01TK"
    },
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