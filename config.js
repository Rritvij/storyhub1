  import firebase from 'firebase'
  require('@firebase/firestore')
  
  var firebaseConfig = {
    apiKey: "AIzaSyBJXfX5BLDrnY33NlVMNZ7eBMeANRkI9t0",
    authDomain: "wily-app-70668.firebaseapp.com",
    projectId: "wily-app-70668",
    storageBucket: "wily-app-70668.appspot.com",
    messagingSenderId: "150266453397",
    appId: "1:150266453397:web:a4dc9d5d0d40709d9aaa9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


 