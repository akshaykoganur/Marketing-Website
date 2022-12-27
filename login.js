// Import the functions you need from the SDKs you need

import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
   //enter your credentials here
    apiKey: "AIzaSyBo1Gd377Glpbjsi8iAXWUENl4gqA203m4",
    authDomain: "marketing-web-c37fb.firebaseapp.com",
    databaseURL: "https://marketing-web-c37fb-default-rtdb.firebaseio.com",
    projectId: "marketing-web-c37fb",
    storageBucket: "marketing-web-c37fb.appspot.com",
    messagingSenderId: "893694529509",
    appId: "1:893694529509:web:845deca21c21a0215e290c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


btnlogIn.addEventListener('click',(e)=> {
    var email = document.getElementById('logMail').value;
    var password = document.getElementById('logPassword').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        const dt = new Date();
        update(ref(database, 'users/' + user.uid),{
            last_login : dt,
        })
        alert('login successful !!');
        document.getElementsByClassName('authuname').innerText = 'Welcome Back';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error'+errorMessage);
  });
})

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

logOut.addEventListener('click', (e)=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("Log out successful");
  }).catch((error) => {
    // An error happened.
    alert("Error failed");
  });
})
