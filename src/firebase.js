import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAM4nn-VujkBJHU97k8_2RsNiXhPisrOiw",
    authDomain: "clone-6cad3.firebaseapp.com",
    projectId: "clone-6cad3",
    storageBucket: "clone-6cad3.appspot.com",
    messagingSenderId: "186085231931",
    appId: "1:186085231931:web:eba6eb4c8c9bb05369fb1e",
    measurementId: "G-41TQ90J83K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const ts = firebase.firestore.FieldValue.serverTimestamp;


  
  export {auth,provider,storage, ts};
  export default db;