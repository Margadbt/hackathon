import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbmy4Nf4v7OHWfSqiPUEu3DmZkQH3E9_g",
    authDomain: "hackathon-f7fea.firebaseapp.com",
    databaseURL: "https://hackathon-f7fea-default-rtdb.firebaseio.com",
    projectId: "hackathon-f7fea",
    storageBucket: "hackathon-f7fea.appspot.com",
    messagingSenderId: "83995524316",
    appId: "1:83995524316:web:ba5a607a59f2f8b9488819",
    measurementId: "G-N0Y9MRJZ5B"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db};