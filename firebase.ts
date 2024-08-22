// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'instagram-clone-18339.firebaseapp.com',
  projectId: 'instagram-clone-18339',
  storageBucket: 'instagram-clone-18339.appspot.com',
  messagingSenderId: '861025136229',
  appId: '1:861025136229:web:d71e67a65d781e1a14608c',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)


/*
rules_version = '2';

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*')
    }
  }
}
 */