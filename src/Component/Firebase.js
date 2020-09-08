import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAT9Gy0GCpYtF6L65jLO9IxLa7ZNS1D87I",
  authDomain: "slack-chat-suhin.firebaseapp.com",
  databaseURL: "https://slack-chat-suhin.firebaseio.com",
  projectId: "slack-chat-suhin",
  storageBucket: "slack-chat-suhin.appspot.com",
  messagingSenderId: "447364067336",
  appId: "1:447364067336:web:c55c24a6139f5736f4e1bd",
  measurementId: "G-5E3V2WN94B",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
