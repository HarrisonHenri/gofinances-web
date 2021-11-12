import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAO9b-OgELo9yBTOt_YevnfgLFzQ76uFx4',
  authDomain: 'gofinances-330223.firebaseapp.com',
  projectId: 'gofinances-330223',
  storageBucket: 'gofinances-330223.appspot.com',
  messagingSenderId: '406262197910',
  appId: '1:406262197910:web:c0e47803e31ce8d6031cb7',
};

if (!firebase.apps.length) firebase.initializeApp({ ...config });

export const auth = firebase.auth();

export const GoogleProvider = firebase.auth.GoogleAuthProvider;
