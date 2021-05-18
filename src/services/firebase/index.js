import { createContext } from 'react';
import firebase from 'firebase';
import FirebaseApp from 'firebase/app';
import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!FirebaseApp.apps.length) {
      FirebaseApp.initializeApp(firebaseConfig);
      // firebase.analytics();
      FirebaseApp.firestore()
        .enablePersistence({ synchronizeTabs: true })
        .catch((err) => console.log(err));
    }
    FirebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        sessionStorage.setItem('user', JSON.stringify({
          login: true,
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          phoneNumber: user.providerData[0].phoneNumber,
          photoURL: user.photoURL,
        }));
      } else {
        sessionStorage.setItem('user', JSON.stringify({
          login: false,
          uid: 0,
          name: '',
          email: 'a',
          photoURL: '',
        }));
      }
    });
  }
}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };