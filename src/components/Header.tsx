import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import colors from '../constants/colors';

export interface Props {
	title?: string;
	Left?: () => ReactNode;
	Right?: () => ReactNode;
	secondRight?: () => ReactNode;
}
export default function Header({ title, Left, Right, secondRight }: Props) {
	return (
		<header
			css={css`
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 10rem;
				padding: 0 13%;
				background-color: ${colors.mainColor};
				border-bottom-left-radius: 5rem;
			`}
		>
			<div
				css={css`
					flex-direction: row;
					align-items: center;
				`}
			>
				<div
					css={css`
						flex: 1;
					`}
				>
					{Left && Left()}
				</div>
				<div
					css={css`
						flex: 1;
						text-align: center;
					`}
				>
					<h1
						css={css`
							color: #fff;
							font-size: 1rem;
						`}
					>
						{title}
					</h1>
				</div>
				<div
					css={css`
						display: flex;
						flex-direction: row-reverse;
						flex: 1;
					`}
				>
					<div
						css={css`
							display: flex;
							flex: ${secondRight ? 1 : 0};
							background-color: 'transparent';
							flex-direction: row-reverse;
						`}
					>
						{secondRight && secondRight()}
					</div>
					<div
						css={css`
							display: flex;
							flex: ${Right ? 1 : 0};
							background-color: 'transparent';
							flex-direction: row-reverse;
						`}
					>
						{Right && Right()}
					</div>
				</div>
			</div>
			<div
				css={css`
					width: 100%;
					margin-top: 1rem;
				`}
			>
				<span
					css={css`
						color: ${colors.white};
						font-size: 1.7rem;
						text-align: left;
					`}
				>
					Create
					<br />
					Account
				</span>
			</div>
		</header>
	);
}
