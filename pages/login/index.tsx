import React, { useCallback, useState } from 'react';

import { useEffect } from 'react';

import googleSvg from '../../public/googleSvg.svg';
import table from '../../public/table.png';
import Image from 'next/image';
import {
	AlertText,
	FlexDivWrapper,
	GoogleButton,
	ImageWrapper,
	InputForm,
	LinkText
} from './Login.styles';
import { doc, getDoc } from 'firebase/firestore';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useInputs from '../../src/hooks/userInputs';
import { signInGoogle, signInWithEmail } from '../../src/util/auth';
import Header from '../../src/components/Header';
import AnimatedInput from '../../src/components/AnimatedInput';
import Button from '../../src/components/Button';
import { useRouter } from 'next/router';
import makeErrorMessage from '../../src/util/makeErrorMessage';
import { db } from '../../firebaseconfig';
import { css } from '@emotion/react';

interface loginInfo {
	email: string;
	password: string;
}

export default function LoginPage() {
	const [res, setRes] = useState();
	const router = useRouter();
	const auth = getAuth();

	const [loginInfo, onChange] = useInputs<loginInfo>({
		email: '',
		password: ''
	});
	const { email, password } = loginInfo;

	const onClickGoogleLogin = useCallback(async () => {
		try {
			signInGoogle();
		} catch (e) {
			console.log(e);
		}
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const docRef = doc(db, 'users', user.uid);
				const dockSnap = await getDoc(docRef);

				if (dockSnap.exists()) {
				}
				if (!dockSnap.exists()) {
					router.push('/setCarInfo');
				}
				// console.log(user.uid);
			} else {
			}
		});
	}, [auth, router]);

	const spanStyle = useCallback((isOpen: boolean, errorMessage?: string) => {
		makeErrorMessage('login-alert', isOpen, errorMessage);
	}, []);

	const onClickRegisterButton = useCallback(async () => {
		const { email, password } = loginInfo;
		spanStyle(true);

		try {
			const res = await signInWithEmail(email, password);
			console.log(res);
			router.push('/login');
		} catch (e: any) {
			if (e.code === 'auth/weak-password') {
				spanStyle(false, '비밀번호는 최소 6글자 입니다');
			}
			if (e.code === 'auth/email-already-in-use') {
				spanStyle(false, '이미 존재하는 이메일 입니다');
			}
		}
	}, [router, spanStyle, loginInfo]);

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			onClickRegisterButton();
		},
		[onClickRegisterButton]
	);

	return (
		<>
			<Header />
			<ImageWrapper>
				<Image
					css={css`
						width: 10rem;
						height: 50%;
					`}
					width={300}
					height={250}
					loading="lazy"
					src={table}
					alt="logo image"
				/>
			</ImageWrapper>
			<InputForm onSubmit={(e) => onSubmit(e)}>
				<AnimatedInput
					alertText="입력란이 비었습니다"
					labelText="이메일 주소"
					onChange={onChange}
					target="email"
					value={email}
				/>
				<AnimatedInput
					alertText="입력란이 비었습니다"
					labelText="비밀번호"
					onChange={onChange}
					target="password"
					value={password}
				/>
				<Button buttonId="login-button" data-testid="login-button">
					로그인
				</Button>
				<AlertText id="login-alert"></AlertText>
				<FlexDivWrapper>
					<LinkText
						css={css`
							font-size: 2rem;
						`}
						href={'/register'}
					>
						아직 회원이 아니신가요? 회원가입 하기
					</LinkText>
				</FlexDivWrapper>
			</InputForm>
			<GoogleButton onClick={() => onClickGoogleLogin()}>
				<Image src={googleSvg} alt="home" width={40} height={40} />
				<span>구글 로그인</span>
			</GoogleButton>
		</>
	);
}
