import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDWoiekHCxRTz6W_qQNFiw1m5ocW7LkqOg",
    authDomain: "clone-yt-400a4.firebaseapp.com",
    projectId: "clone-yt-400a4",
    storageBucket: "clone-yt-400a4.appspot.com",
    messagingSenderId: "756451289902",
    appId: "1:756451289902:web:480c9e25096f2ce61e68bf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider };