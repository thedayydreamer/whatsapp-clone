import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAp1HBICwiKndZAPDfOOHubx6gz9EuTeT8",
    authDomain: "whatsapp-clone-ae148.firebaseapp.com",
    projectId: "whatsapp-clone-ae148",
    storageBucket: "whatsapp-clone-ae148.appspot.com",
    messagingSenderId: "1094920092995",
    appId: "1:1094920092995:web:11ce1d312f6b49ade803f6",
    measurementId: "G-5LZP87CZTV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(firebaseApp);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;