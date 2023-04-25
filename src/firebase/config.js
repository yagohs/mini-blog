
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFkTVOddiwO_6rmQiKeO7cQhl0UPbCvKE",
  authDomain: "minibloghs.firebaseapp.com",
  projectId: "minibloghs",
  storageBucket: "minibloghs.appspot.com",
  messagingSenderId: "984981876212",
  appId: "1:984981876212:web:44a3e834195a1ee429dda1"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };