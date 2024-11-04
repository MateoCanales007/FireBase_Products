import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCvRqGXulVQadW5rrnoAvsXdasmfArAO9o",
    authDomain: "autenticacion-e8d0c.firebaseapp.com",
    projectId: "autenticacion-e8d0c",
    storageBucket: "autenticacion-e8d0c.firebasestorage.app",
    messagingSenderId: "136826847317",
    appId: "1:136826847317:web:458373499c17b816d2d4dc",
    measurementId: "G-98QEY8D7PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporting auth and db as named exports
export { auth, db };

// Exporting the app as the default export
export default app;

const analytics = getAnalytics(app);  // Initialize Firebase Analytics