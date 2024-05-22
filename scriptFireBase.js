// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAaicFBDAsMeD0trMec_GeVKgKXDnNyItY",
    authDomain: "database-login-570b3.firebaseapp.com",
    projectId: "database-login-570b3",
    storageBucket: "database-login-570b3.appspot.com",
    messagingSenderId: "173506458671",
    appId: "1:173506458671:web:f2a767116defda462c42da"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //submit button
  const submit = document.getElementById("submit");
  submit.addEventListener("click",function (event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creazione Account In Corso...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })
