import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyC9XshTpK_L2TkAJL9U0sj-_5-PnnE9amM',
  authDomain: 'cody-polland-portfolio.firebaseapp.com',
  projectId: 'cody-polland-portfolio"',
  storageBucket: 'cody-polland-portfolio.appspot.com',
  messagingSenderId: '765834341242',
  appId: '1:765834341242:web:23ca9349adc3049c0204c3',
  measurementId: 'G-N2G9E97RHW',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
