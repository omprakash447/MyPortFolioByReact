import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4Gal3yt7TKx9e3hKJe4Pw_o6IM-OL0BM",
    authDomain: "protfolio-react-f1cf7.firebaseapp.com",
    databaseURL: "https://protfolio-react-f1cf7-default-rtdb.firebaseio.com",
    projectId: "protfolio-react-f1cf7",
    storageBucket: "protfolio-react-f1cf7.appspot.com",
    messagingSenderId: "135661432742",
    appId: "1:135661432742:web:533dbe8af27eb055c4a967",
    measurementId: "G-EVT4YXWV8D"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);