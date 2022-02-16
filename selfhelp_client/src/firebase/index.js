import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCRFaRv3fnabUp7eS4NbI5S7fFbI2QrI30",
    authDomain: "self-help-47c0f.firebaseapp.com",
    projectId: "self-help-47c0f",
    storageBucket: "self-help-47c0f.appspot.com",
    messagingSenderId: "16019217478",
    appId: "1:16019217478:web:7f0f4694061cb0211f3e47",
    measurementId: "G-3F70RHM59T"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();


export { storage, firebase as default };