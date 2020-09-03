import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDI8lkPqG_BjKBpYZ7tO6BmKo5KWbGWPPM",
    authDomain: "whatsapp-clone-b85ec.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-b85ec.firebaseio.com",
    projectId: "whatsapp-clone-b85ec",
    storageBucket: "whatsapp-clone-b85ec.appspot.com",
    messagingSenderId: "955993849527",
    appId: "1:955993849527:web:2ee9a28b142a9189c21732",
    measurementId: "G-MSHYJ22726"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;