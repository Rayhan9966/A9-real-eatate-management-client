
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6M-Z8ZoHExUwpktfx1_Qc_yPNTTE4Ggo",
  authDomain: "assignment9-build-realsate.firebaseapp.com",
  projectId: "assignment9-build-realsate",
  storageBucket: "assignment9-build-realsate.appspot.com",
  messagingSenderId: "774434895388",
  appId: "1:774434895388:web:25db7a30b9cf6b99c0d1d9"
};


const app = initializeApp(firebaseConfig);
// const auth= getAuth(app);
export const auth= getAuth(app)