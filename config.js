import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyATTKfNmczTJbyxBtdZG-T1zBXbs23mFCY",
  authDomain: "reguvenate-761c3.firebaseapp.com",
  databaseURL: "https://reguvenate-761c3.firebaseio.com",
  projectId: "reguvenate-761c3",
  storageBucket: "reguvenate-761c3.appspot.com",
  messagingSenderId: "181185223998",
  appId: "1:181185223998:web:c29cc40edd628f27fae06f"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
