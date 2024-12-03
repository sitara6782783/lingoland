// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALdp5jX41sIZRXak0XrvupYJZspyE4Wgo",
    authDomain: "language-learning-app-aa484.firebaseapp.com",
    projectId: "language-learning-app-aa484",
    storageBucket: "language-learning-app-aa484.firebasestorage.app",
    messagingSenderId: "907943215929",
    appId: "1:907943215929:web:79759ca59ca2e2e9cfdee8",
    databaseURL: "https://language-learning-app-aa484-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
