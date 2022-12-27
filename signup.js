
// Import the functions you need from the SDKs you need

import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  
   const firebaseConfig = {
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


signUp.addEventListener('click',(e) => {
    var email = document.getElementById('registerMail').value;
    var password = document.getElementById('registerPassword').value;
    var username = document.getElementById('userName').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert('User created');
        set(ref(database, 'users/' + user.uid),{
            username : username,
            email : email
        })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert('error'+errorMessage);
    });
});
