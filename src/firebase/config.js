import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCW-Z2yMycszEwwiaIcOvjLNrAxtf2gZdo",
    authDomain: "photo-gallery-md.firebaseapp.com",
    databaseURL: "https://photo-gallery-md.firebaseio.com",
    projectId: "photo-gallery-md",
    storageBucket: "photo-gallery-md.appspot.com",
    messagingSenderId: "206851078170",
    appId: "1:206851078170:web:70ed06e769384b138679a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {storage, firestore, timestamp}