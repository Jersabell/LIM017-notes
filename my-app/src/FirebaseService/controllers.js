import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";

import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    Timestamp,
    getDocs,
    deleteDoc
} from "firebase/firestore"

import { app } from '../FirebaseService/InitialConfig';

const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

// Registrar usuario
export const registerUser = (email, password) => {
    auth.languageCode = 'es';
    return createUserWithEmailAndPassword(auth, email, password);
};

// Registrar nombre de usuario
export const updateUserData = (name) =>updateProfile(auth.currentUser, {
    displayName: name })

// Enviar email de verificación 
export const sendMail = () => sendEmailVerification(auth.currentUser);

// Login 
export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// usuario logeado
export const userUid = (user) => onAuthStateChanged(auth, user);


// login with google
export const singInGoogle = () => signInWithPopup(auth, provider);

// Crear db de notas del usuario
export const dbUserNotes = (uid, title,description) => setDoc(doc(db, uid, title), {
    title: title,
    description: description,
    dateTime: Timestamp.fromDate(new Date()),

});

// leer db de un usuario
export const readCollection = (uid) => query(collection(db, uid), orderBy('dateTime', 'desc'));

// conseguir documentos de la colección
export const getDocsOfCollections = (notescollection,callback) => onSnapshot(notescollection, callback);

// eliminar notas
export const deleteNote = (uid, id) => deleteDoc(doc(db, uid, id));

// export const readDBUser = (uid) =>{
//     return onSnapshot(doc(db, uid, uid, 'Notes', 'Primera nota'), (doc) => {
//         console.log("Current data: ", doc.data());
//     });
// }