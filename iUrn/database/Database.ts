import getUserName from "./functions/getUserName";
import getUserDoc from "./functions/getUserDoc"
import getRandomMemory from "./functions/getRandomMemory";
import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { Firestore, initializeFirestore } from "firebase/firestore"
class Database {
  // TODO: stop using Function type you dummy
  getUserName: Function;
  app: FirebaseApp;
  firestore:Firestore;
  getUserDoc:Function;
  getRandomMemory:Function;
  storage: FirebaseStorage;
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDy5QIL0Lhj7dOR_UZWmIVeo7TttR7ROrA",
      authDomain: "iurn-973d0.firebaseapp.com",
      projectId: "iurn-973d0",
      storageBucket: "iurn-973d0.appspot.com",
      messagingSenderId: "846449794739",
      appId: "1:846449794739:web:58a8db3e20b525b5679ac6",
      measurementId: "G-MR8KTYSGKE",
    };
 
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.firestore = initializeFirestore(this.app, {
      experimentalForceLongPolling: true,
    })
    this.storage = getStorage(this.app)
    this.getUserName = getUserName(this.firestore);
    this.getUserDoc = getUserDoc(this.firestore)
    this.getRandomMemory = getRandomMemory(this.firestore, this.storage)
  }
}

export default new Database();
