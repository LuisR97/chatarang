import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'


//Intialize firebase
const config = {
    apiKey: "AIzaSyD-DCIDfFQtOtiWVZ7bnmB8Jb1N8GB3GmA",
    authDomain: "chat-s3afternoon-83b55.firebaseapp.com",
    databaseURL: "https://chat-s3afternoon-83b55.firebaseio.com",
    projectId: "chat-s3afternoon-83b55",
    storageBucket: "",
    messagingSenderId: "796885154502"
  };

  const app = firebase.initializeApp(config);

  //Configure authentication
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const githubProvider = new firebase.auth.GithubAuthProvider();
  export const auth = firebase.auth()
  
  //Configure database and Rebase
  const db = firebase.database(app)
  const base = Rebase.createClass(db)
  export default base 