import { css } from '@emotion/react';

import React from 'react';
import { useMemo } from 'react';
import colors from '../constants/colors';
interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	target: string;
	labelText: string;
	alertText: string;
	value: string;
	maxLength?: number;
}

export default function AnimatedInput({
	onChange,
	target,
	labelText,
	alertText,
	value,
	maxLength
}: Props) {
	const inputCSS = useMemo(() => inputStyle, []);
	return (
		<>
			<div css={inputCSS}>
				<input
					placeholder=" "
					onChange={(e) => onChange(e)}
					id={`input-${target}`}
					name={target}
					value={value}
					data-testid={`input-${target}`}
					type={target}
					maxLength={maxLength}
				/>
				<label htmlFor="title">{labelText}</label>
			</div>
			<span
				css={css`
					display: none;
					color: ${colors.red800};
					font-size: 1.3rem;
					padding-top: -1rem;
					margin-bottom: 0.5rem;
				`}
			>
				{alertText}
			</span>
		</>
	);
}

const inputStyle = css`
	display: flex;
	position: relative;
	flex: 1;
	padding: 1.3rem;
	font-size: 0.6rem;
	margin-top: 1rem;
	margin-bottom: 2rem;
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	& input {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 3rem;
		border: 1px solid ${colors.mainColor};
		border-radius: 0.5rem;
		color: ${colors.black};
		outline: none;
		padding: 0.7rem;
		background: none;
		font-size: 1rem;
		z-index: 1;
		&:hover {
			border-color: ${colors.subColor};
		}
		&:focus {
			border-color: ${colors.mainColor};
		}
	}

	& label {
		position: absolute;
		left: 0.6rem;
		top: 0.8rem;
		padding: 0.2rem;
		font-size: 0.9rem;
		border-radius: 0.3rem;
		color: ${colors.grey100};
		cursor: text;
		transition: top 300ms linear, left 300ms linear, font-size 300ms linear;
		background-color: ${colors.subColor};
		z-index: 0;
	}
	input:focus ~ label,
	input:not(:placeholder-shown) ~ label,
	input:-webkit-autofill ~ label {
		top: -0.8rem;
		font-size: 0.9rem;
		left: 0.5rem;
		z-index: 1;
	}
`;
