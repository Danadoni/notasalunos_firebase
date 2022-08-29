// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyBYS6SeCa1ilbO2M0B98ApMuWPh5NDpQoo",
  authDomain: "aula-e6760.firebaseapp.com",
  projectId: "aula-e6760",
  storageBucket: "aula-e6760.appspot.com",
  messagingSenderId: "206636586225",
  appId: "1:206636586225:web:c87a314a93740174eac550",
  measurementId: "G-LNBJMHYKWD"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;