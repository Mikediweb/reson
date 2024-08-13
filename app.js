// app.js
// Configuración de Firebase 
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
// Import the functions you need from the SDKs you need

  

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyBEps1MGRev62pQ6Gzm-oGY_gbwLBW_3Yk",

    authDomain: "reson-ed1b0.firebaseapp.com",

    projectId: "reson-ed1b0",

    storageBucket: "reson-ed1b0.appspot.com",

    messagingSenderId: "945978467577",

    appId: "1:945978467577:web:6a429bd818509a212cee28",

    measurementId: "G-7NEMM7R290"

  };


  // Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  try {
    await signInWithEmailAndPassword(auth, username, password);
    document.getElementById('auth').style.display = 'none';
    document.getElementById('cameraContainer').style.display = 'block';
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
  }
}

async function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  try {
    await createUserWithEmailAndPassword(auth, username, password);
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    showLoginForm();
  } catch (error) {
    console.error('Error de registro:', error);
  }
}

function showRegisterForm() {
  document.getElementById('auth').style.display = 'none';
  document.getElementById('register').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('register').style.display = 'none';
  document.getElementById('auth').style.display = 'block';
}

async function startVideo() {
  const video = document.getElementById('video');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.error('Error al acceder a la cámara:', error);
  }
}
