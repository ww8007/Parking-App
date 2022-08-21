import type { AppProps } from 'next/app';
import GlobalStyle from '../GlobalStyle';
import * as React from 'react';
import { app } from '../firebaseconfig';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		return () => {
			app;
		};
	}, []);
	return (
		<>
			<GlobalStyle />
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
}

export default MyApp;
