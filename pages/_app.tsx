import type { AppProps } from 'next/app';
import GlobalStyle from '../GlobalStyle';
import '../firebaseconfig';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
