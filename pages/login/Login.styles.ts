import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import Link from 'next/link';
import colors from '../../src/constants/colors';

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const AlertText = styled.span`
	display: none;
	color: ${colors.red500};
	font-size: 0.9rem;
	margin-top: -1rem;
	margin-bottom: 1rem;
	animation-name: vibration;
	animation-duration: 0.1s;
	animation-iteration-count: 5;
	@keyframes vibration {
		from {
			transform-origin: left;
			transform: rotate(0.5deg);
		}
		to {
			transform: rotate(-0.5deg);
			transform-origin: right;
		}
	}
`;

export const InputForm = styled.form`
	width: 80%;

	margin: auto;

	@media (min-width: 768px) {
		width: 80%;
	}
	@media (min-width: 1024px) {
		width: 40%;
	}
`;

export const LinkText = styled(Link)`
	justify-self: flex-end;
	justify-content: flex-end;
	justify-items: flex-end;
	color: ${colors.orange900};
	font-size: 2rem;
`;

export const FlexDivWrapper = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: flex-end;
	font-size: 0.6rem;
`;

export const GoogleButton = styled.div`
	display: flex;
	width: 80%;
	align-items: center;
	margin: 0 auto;
	padding: 0.3rem;
	border-radius: 0.7rem;
	margin-top: 1rem;
	cursor: pointer;

	background-color: ${colors.blue300};
	span {
		margin-left: 0.6rem;
		color: ${colors.white};
		font-size: 1rem;
	}
	@media (min-width: 768px) {
		width: 80%;
	}
	@media (min-width: 1024px) {
		width: 40%;
	}
`;
