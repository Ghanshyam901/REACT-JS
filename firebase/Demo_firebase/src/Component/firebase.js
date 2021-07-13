import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; 

firebase.initializeApp(
    {
        apiKey: "AIzaSyCic8cEAVDYAxEn3nEHfOG4HdTNqAy7Pr4",
        authDomain: "class-demo-10b40.firebaseapp.com",
        projectId: "class-demo-10b40",
        storageBucket: "class-demo-10b40.appspot.com",
        messagingSenderId: "972718529901",
        appId: "1:972718529901:web:2cb3d0be18101d2266ce64"
      }
)

export default firebase;