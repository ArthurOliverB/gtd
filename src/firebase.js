import firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBtLjBijI21V4luU3IvrGJprroQyY751tk",
    authDomain: "to-doing-ae3d3.firebaseapp.com",
    databaseURL: "https://to-doing-ae3d3.firebaseio.com",
    projectId: "to-doing-ae3d3",
    storageBucket: "to-doing-ae3d3.appspot.com",
    messagingSenderId: "580097797431",
    appId: "1:580097797431:web:ef43c55c9dd2d4fbc63eb2",
    measurementId: "G-HVQ8XXM29C"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export  default firebase;