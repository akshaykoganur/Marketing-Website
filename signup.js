
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
