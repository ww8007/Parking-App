import styled from '@emotion/styled';
import colors from '../../src/constants/colors';

export const FlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ExampleText = styled.span``;

export const IconWrapper = styled.div`
	flex: 1;
	margin-left: -1rem;
	.button {
		border: none;
		cursor: pointer;
		padding: 10rem;
		&:focus {
			outline: none;
		}
	}
`;

export const InputInfo = styled.div`
	margin-top: -1rem;
	width: 100%;
	height: 3rem;
	margin: 0.5rem 0;
	background-color: ${colors.subColor};
	padding: 0.7rem;
	display: flex;
	border-radius: 0.6rem;
	align-content: center;
	align-items: center;
	span {
		align-self: center;
		align-content: center;
		text-align: center;
		align-items: center;
		font-size: 1rem;
		color: ${colors.white};
	}
`;
