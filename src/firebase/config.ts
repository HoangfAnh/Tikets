import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAjXR4WvjZ-QqMQGnnBG_ut4jtrdWSUhIA",
  authDomain: "tikets-5d20e.firebaseapp.com",
  projectId: "tikets-5d20e",
  storageBucket: "tikets-5d20e.appspot.com",
  messagingSenderId: "633790415305",
  appId: "1:633790415305:web:73692361598b3f524e6818",
  measurementId: "G-0FN8JHDL7H"
};
firebase.initializeApp(config);
export default firebase.firestore();


