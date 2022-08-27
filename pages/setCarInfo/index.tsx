import React, { useCallback, useState } from 'react';
import AnimatedInput from '../../src/components/AnimatedInput';
import Button from '../../src/components/Button';
import Header from '../../src/components/Header';
import useInputs from '../../src/hooks/userInputs';
import { InputForm } from '../login/Login.styles';
import { FlexWrapper, InputInfo } from './CarInfo.styles';

import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useToastSwal from '../../src/components/ToastSwal';

interface RegisterInfo {
	name: string;
	phoneNumber: string;
	carInfo: string;
}

export default function CarInfoPage() {
	const [registerInfo, onChange, setForm] = useInputs<RegisterInfo>({
		name: '',
		phoneNumber: '',
		carInfo: ''
	});
	const [uid, setUid] = useState('');
	const [Swal] = useToastSwal();

	const onChangeNumber = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setForm((form) => ({
				...form,
				[name]: value
					.replace(/[^0-9]/g, '')
					.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
					.replace(/(\-{1,2})$/g, '')
			}));
		},
		[setForm]
	);

	const router = useRouter();
	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			if (!uid) {
				setUid(user.uid);
			}
			// ...
		}
		if (!user) {
			// router.push('/login');
		}
	});
	const { name, phoneNumber, carInfo } = registerInfo;

	const onClickFormButton = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await setDoc(doc(db, 'users', uid), {
			name,
			phoneNumber,
			carInfo
		}).then((res) => {
			Swal.fire({
				icon: 'success',
				title: '회원가입이 완료 되었습니다'
			});
			setTimeout(() => {
				router.push('/');
			}, 1500);
		});
	};

	return (
		<>
			<Header
			// Left={() => (
			// 	<IconWrapper
			// 		onClick={() => {
			// 			router.push('/login');
			// 		}}
			// 	>
			// 		<LeftIcon size={40} color="#fff" />
			// 	</IconWrapper>
			// )}
			/>
			{/* <ImageWrapper>
				<Image loading="lazy" src={table} alt="logo image" />
			</ImageWrapper> */}
			<InputForm
				css={css`
					margin-top: 3rem;
				`}
				onSubmit={(e) => onClickFormButton(e)}
			>
				<AnimatedInput
					alertText="입력란이 비었습니다"
					labelText="이름"
					onChange={onChange}
					target="name"
					value={name}
					maxLength={5}
				/>
				<AnimatedInput
					alertText="입력란이 비었습니다"
					labelText="휴대폰 번호"
					onChange={onChangeNumber}
					target="phoneNumber"
					value={phoneNumber}
					maxLength={13}
				/>
				<InputInfo>
					<span>차량번호 입력 예시 : 11가 1234</span>
				</InputInfo>
				<FlexWrapper
					css={css`
						margin-bottom: 1rem;
					`}
				>
					<AnimatedInput
						alertText="입력란이 비었습니다"
						labelText="차량 번호"
						onChange={onChange}
						target="carInfo"
						value={carInfo}
					/>
				</FlexWrapper>
				<Button buttonId="login-button" data-testid="login-button">
					작성 완료
				</Button>
			</InputForm>
		</>
	);
}
