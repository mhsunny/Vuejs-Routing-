 import firebase from 'firebase';
 import firestore from 'firebase/firestore' 

   // Your web app's Firebase configuration
     var firebaseConfig = {
      apiKey: "api key here",
      authDomain: "single-page-vue-js.firebaseapp.com",
      databaseURL: "https://single-page-vue-js.firebaseio.com",
      projectId: "single-page-vue-js",
      storageBucket: "single-page-vue-js.appspot.com",
      messagingSenderId: "",
      appId: "api id here"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({timestampsInSnapshots: true})
  //export firestore database
  export default firebaseApp.firestore();
