
import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyBVA3oQhJlwqkaq5r4KKjFX9Ip0BN_HuXU",
        authDomain: "reels-9ef56.firebaseapp.com",
        projectId: "reels-9ef56",
        storageBucket: "reels-9ef56.appspot.com",
        messagingSenderId: "148016619379",
        appId: "1:148016619379:web:0c037a5f476187b3236f06"
      }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();