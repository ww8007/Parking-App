import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithRedirect,
	signOut
} from 'firebase/auth';

const auth = getAuth();

export const registerWithEmail = (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const signInGoogle = () => {
	const provider = new GoogleAuthProvider();

	return signInWithRedirect(auth, provider);
};
export const singOutGoogle = () => {
	return signOut(auth);
};
