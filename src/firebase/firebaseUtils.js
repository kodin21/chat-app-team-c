import firebase from "firebase/app";
import "firebase/database";

import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
// realtime database config for online users count
export const realTime = firebase.database();

export const database = firebase.firestore();

export default firebase;
