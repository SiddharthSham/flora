import firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    //your config here
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const posts_db = db.collection('posts')

export { posts_db }
