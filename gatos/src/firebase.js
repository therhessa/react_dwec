import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnB_KAt-d06cELz5t1ZsqDWty0pVMalM0",
  authDomain: "primerejemplo-a2405.firebaseapp.com",
  projectId: "primerejemplo-a2405",
  storageBucket: "primerejemplo-a2405.appspot.com",
  messagingSenderId: "40955585286",
  appId: "1:40955585286:web:a90a61415a933937017487"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore()
  const auth=firebase.auth()


  export {db,auth}