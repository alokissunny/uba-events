import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD9U6CWxoUC8joFj2R-7vyWZ3BiuEDGdKQ",
    authDomain: "temperatureconvertersamp-1b626.firebaseapp.com",
    databaseURL: "https://temperatureconvertersamp-1b626.firebaseio.com",
    projectId: "temperatureconvertersamp-1b626",
    storageBucket: "temperatureconvertersamp-1b626.appspot.com",
    messagingSenderId: "264847970711",
    appId: "1:264847970711:web:509aa215b58d6ed4b274d2"
  };
var fire = firebase.initializeApp(firebaseConfig);
export default fire;