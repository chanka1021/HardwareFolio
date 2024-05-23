import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwWGXhEIG0HggYUbnCNf1yWq2R5kyHQiA",
    authDomain: "hardwarefolio-2018c.firebaseapp.com",
    databaseURL: "https://hardwarefolio-2018c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hardwarefolio-2018c",
    storageBucket: "hardwarefolio-2018c.appspot.com",
    messagingSenderId: "261190902817",
    appId: "1:261190902817:web:5b71f426f090a7ae78ef60",
    measurementId: "G-5FTQ5SCY8Y"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };