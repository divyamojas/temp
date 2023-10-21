// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd2NaY6tWQt_QdDaRi9PFS6KN4ClK9aHc",
    authDomain: "project-wakanda.firebaseapp.com",
    projectId: "project-wakanda",
    storageBucket: "project-wakanda.appspot.com",
    messagingSenderId: "195458801189",
    appId: "1:195458801189:web:ce4c4a484dd778ffea29cc",
    measurementId: "G-G9C7L4WVXD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);