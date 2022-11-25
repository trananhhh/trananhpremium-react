// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDfbwLHfCl4FXbIks6WN7zM1_zvfCvpsrI',
    authDomain: 'trananhpremium-65c2d.firebaseapp.com',
    projectId: 'trananhpremium-65c2d',
    storageBucket: 'trananhpremium-65c2d.appspot.com',
    messagingSenderId: '480865421378',
    appId: '1:480865421378:web:c5b84db531f165012f45db',
    measurementId: 'G-N36MTPPYR4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
