// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { config } from './config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: config.firebase.apiKey,
	authDomain: config.firebase.authDomain,
	projectId: config.firebase.projectId,
	storageBucket: config.firebase.bucket,
	messagingSenderId: config.firebase.messageSenderId,
	appId: config.firebase.appId,
	measurementId: config.firebase.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
