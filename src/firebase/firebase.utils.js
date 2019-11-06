import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAo-LEHfpypj-mg94rd3y_QumsIEfKxjQE",
    authDomain: "crwn-db-e1e08.firebaseapp.com",
    databaseURL: "https://crwn-db-e1e08.firebaseio.com",
    projectId: "crwn-db-e1e08",
    storageBucket: "crwn-db-e1e08.appspot.com",
    messagingSenderId: "495190870297",
    appId: "1:495190870297:web:f86bc0470112fa4f4e9d88",
    measurementId: "G-BZXER537B4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;