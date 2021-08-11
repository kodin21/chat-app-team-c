import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
