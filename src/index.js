import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQbcWmccXbr775SiEaIKOCVjB7r31bRPM",
    authDomain: "powa-wise-app.firebaseapp.com",
    projectId: "powa-wise-app",
    storageBucket: "powa-wise-app.appspot.com",
    messagingSenderId: "64295682989",
    appId: "1:64295682989:web:b73e83ed57cb301aa25724",
    measurementId: "G-X6TFN5QS03"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


console.log('Hello world');

onAuthStateChanged(auth, user => {
    if(user == null){
        console.log('No user');
    } else {
        console.log('logged in');
    }
});