import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9Z7j_CgAJgxUMNNnVl93LQzKzLEpBhAM",
    authDomain: "friendship-test-f0776.firebaseapp.com",
    projectId: "friendship-test-f0776",
    storageBucket: "friendship-test-f0776.appspot.com",
    messagingSenderId: "418402214542",
    appId: "1:418402214542:web:e31d0899ecb35257069fdf",
    measurementId: "G-KD9WQH4494"
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
