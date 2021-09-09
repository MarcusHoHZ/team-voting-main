import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyAMw2bMtC8zZa6uFoQn7DXKeR65eguNN4U",
        authDomain: "team-voting-ceb9a.firebaseapp.com",
        projectId: "team-voting-ceb9a",
        storageBucket: "team-voting-ceb9a.appspot.com",
        messagingSenderId: "616612746990",
        appId: "1:616612746990:web:f92eee40371b95c37045ff"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();