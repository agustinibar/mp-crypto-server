
const { initializeApp } = require('firebase/app');
const { getAnalytics } = require('firebase/analytics');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDW9HF16Ji_wAJYmnM2Ni-uY75a3X0SGO4",
  authDomain: "ceibo-8a502.firebaseapp.com",
  projectId: "ceibo-8a502",
  storageBucket: "ceibo-8a502.appspot.com",
  messagingSenderId: "428221502483",
  appId: "1:428221502483:web:47dacdb7e86d41a04e5be6",
  measurementId: "G-YV03PN6H65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


module.exports = {
 db
}