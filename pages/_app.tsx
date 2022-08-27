import type { AppProps } from 'next/app';
import GlobalStyle from '../GlobalStyle';
import * as React from 'react';
import { app } from '../firebaseconfig';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		return () => {
			app;
		};
	}, []);
	return (
		<>
			<Head>
				<title>JJ 탁구장 주차장</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
			</Head>
			<GlobalStyle />
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
}

export default MyApp;
