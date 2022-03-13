import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
    const firebaseConfig = {
  apiKey: "AIzaSyDzOCXiEc9ik1K-evhMFsmjz4it31sKzBs",
  authDomain: "team-voting-app-7b17b.firebaseapp.com",
  databaseURL: "https://team-voting-app-7b17b-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-7b17b",
  storageBucket: "team-voting-app-7b17b.appspot.com",
  messagingSenderId: "966715846359",
  appId: "1:966715846359:web:620d7ec991eb4880558a92"
};



    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();