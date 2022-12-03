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
        alert('login successful !! Welcome '+email);
        document.getElementsByClassName('authuname').innerText = 'Welcome Back';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error');
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
