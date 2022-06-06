import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCD9HtCIT78EdXRu2lUmbrMgnlLMGY4a90",
  authDomain: "tikets-sales.firebaseapp.com",
  projectId: "tikets-sales",
  storageBucket: "tikets-sales.appspot.com",
  messagingSenderId: "764241578436",
  appId: "1:764241578436:web:05ae4d326c960cc1d63c91",
  measurementId: "G-6KEJMEHDMM"
};
firebase.initializeApp(config);
export default firebase.firestore();


