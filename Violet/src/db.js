import firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiFHdR0PMJ6O1Cdh5pQc2zse1QGC8k3X8",
    authDomain: "violet-5f474.firebaseapp.com",
    databaseURL: "https://violet-5f474.firebaseio.com",
    projectId: "violet-5f474",
    storageBucket: "violet-5f474.appspot.com",
    messagingSenderId: "1043517061196",
    appId: "1:1043517061196:web:f1f222aa60a4363cb25ce9",
    measurementId: "G-RCP5XPVV7S"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const posts_db = db.collection('posts')

export { posts_db }
