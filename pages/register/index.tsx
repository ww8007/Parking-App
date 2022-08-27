import Image from 'next/image';

import React, { useCallback } from 'react';

import AnimatedInput from '../../src/components/AnimatedInput';
import Button from '../../src/components/Button';
import Header from '../../src/components/Header';
import useInputs from '../../src/hooks/userInputs';
import { registerWithEmail, signInWithEmail } from '../../src/util/auth';
import { AlertText, ImageWrapper, InputForm } from '../login/Login.styles';
import table from '../../public/table.png';
import { useRouter } from 'next/router';
import makeErrorMessage from '../../src/util/makeErrorMessage';
import { css } from '@emotion/react';
interface RegisterInfo {
	email: string;
	password: string;
}

interface ErrorType {
	code: string;
}

export default function RegisterPage() {
	const router = useRouter();

	const [registerInfo, onChange] = useInputs<RegisterInfo>({
		email: '',
		password: ''
	});

	const { email, password } = registerInfo;

	const onClickRegisterButton = useCallback(async () => {
		const spanStyle = (isOpen: boolean, errorMessage?: string) => {
			makeErrorMessage('register-alert', isOpen, errorMessage);
		};
		const { email, password } = registerInfo;
		spanStyle(true, '비밀번호는 최소 6글자 입니다');

		try {
			await registerWithEmail(email, password);

			router.push('/login');
		} catch (e: any) {
			if (e.code === 'auth/weak-password') {
				spanStyle(false, '비밀번호는 최소 6글자 입니다');
			}
			if (e.code === 'auth/email-already-in-use') {
				spanStyle(false, '이미 존재하는 이메일 입니다');
			}
		}
	}, [registerInfo, router]);

	const onClickSendForm = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			onClickRegisterButton();
		},
		[onClickRegisterButton]
	);

	return (
		<>
			<Header />
			<div
				css={css`
					margin-top: 3rem;
				`}
			/>
			<InputForm onSubmit={(e) => onClickSendForm(e)}>
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
				<AlertText id="register-alert"></AlertText>
				<Button buttonId="register-button" data-testid="register-button">
					회원가입
				</Button>
				<ImageWrapper
					css={css`
						margin-top: 2rem;
					`}
				>
					<Image
						width={300}
						height={250}
						loading="lazy"
						src={table}
						alt="logo image"
					/>
				</ImageWrapper>
			</InputForm>
		</>
	);
}
