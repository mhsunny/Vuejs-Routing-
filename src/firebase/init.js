 import firebase from 'firebase';
 import firestore from 'firebase/firestore' 

   // Your web app's Firebase configuration
     var firebaseConfig = {
      apiKey: "AIzaSyCdB0gXSA9DqlJgS3DI48z7phKQ64AMnGY",
      authDomain: "single-page-vue-js.firebaseapp.com",
      databaseURL: "https://single-page-vue-js.firebaseio.com",
      projectId: "single-page-vue-js",
      storageBucket: "single-page-vue-js.appspot.com",
      messagingSenderId: "1022128783925",
      appId: "1:1022128783925:web:9a991b4f170fa828f2a77c"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({timestampsInSnapshots: true})
  //export firestore database
  export default firebaseApp.firestore();
