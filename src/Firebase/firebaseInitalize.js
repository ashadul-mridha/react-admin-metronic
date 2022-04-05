import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";


const firebaseInitializeApp = () => {
    return initializeApp(firebaseConfig);
}
export default firebaseInitializeApp;