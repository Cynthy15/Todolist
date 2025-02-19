const firebaseConfig = {
    apiKey: "AIzaSyDYwfRSzyTamddcNPq0t-_22KLdjizkTzg",
    authDomain: "microproject-7b868.firebaseapp.com",
    projectId: "microproject-7b868",
    storageBucket: "microproject-7b868.firebasestorage.app",
    messagingSenderId: "1073876085744",
    appId: "1:1073876085744:web:ad3751c3034ae27a1f0b35",
    measurementId: "G-QW0WX8EJ0D"
  };
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();