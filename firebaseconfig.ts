// Import the functions you need from the SDKs you need
import { getApp as _getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth as _getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
	enableIndexedDbPersistence,
	getFirestore as _getFirestore
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
};

const firebaseIsRunning = () => !!getApps().length;
// Initialize Firebase
export function getApp() {
	if (!firebaseIsRunning()) initializeApp(firebaseConfig);

	return _getApp();
}

export function getFirestore() {
	const isRunning = firebaseIsRunning();
	if (!isRunning) getApp();

	const db = _getFirestore();

	if (!isRunning)
		if (typeof window !== undefined) enableIndexedDbPersistence(db);

	return db;
}

const provider = new GoogleAuthProvider();
