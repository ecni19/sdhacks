import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPlTwqiXPya_jYzuN9aV-upc7o__xAOQA",
  authDomain: "sdhacks2021-6261c.firebaseapp.com",
  projectId: "sdhacks2021-6261c",
  storageBucket: "sdhacks2021-6261c.appspot.com",
  messagingSenderId: "743362657372",
  appId: "1:743362657372:web:7d08af8cf3a8c3d03cfa99",
  measurementId: "G-1ESXHTTLP1"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

export default storage;