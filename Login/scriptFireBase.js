// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
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
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //submit button
  const submit = document.getElementById("submit");
  submit.addEventListener("click",function (event) {
    event.preventDefault();
    alert("5")
  })
