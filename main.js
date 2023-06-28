// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_hNw-rcfbPgYvhZ1tjN30kRabsuQZsxw",
    authDomain: "librarymanagement-eecfc.firebaseapp.com",
    projectId: "librarymanagement-eecfc",
    storageBucket: "librarymanagement-eecfc.appspot.com",
    messagingSenderId: "369503247134",
    appId: "1:369503247134:web:899aa5c40c5195ab12c70f"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.assign("signin.html")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.assign("index.html")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert("incorrect password");
        });
}