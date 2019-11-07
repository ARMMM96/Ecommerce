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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
   
  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;