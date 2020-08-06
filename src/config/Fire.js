import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCT1GlR2zKOcF7STg8UucM8dVnHUah2Wo4",
    authDomain: "meg-xpogww.firebaseapp.com",
    databaseURL: "https://meg-xpogww.firebaseio.com",
    projectId: "meg-xpogww",
    storageBucket: "meg-xpogww.appspot.com",
    messagingSenderId: "345650997887",
    appId: "1:345650997887:web:b66d39f206091f4f6f2d4a"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;