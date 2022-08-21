import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
	<Global
		styles={css`
			@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
			html,
			body,
			div,
			span,
			applet,
			object,
			iframe,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p,
			blockquote,
			pre,
			a,
			abbr,
			acronym,
			address,
			big,
			cite,
			code,
			del,
			dfn,
			em,
			img,
			ins,
			kbd,
			q,
			s,
			samp,
			small,
			strike,
			strong,
			sub,
			sup,
			tt,
			var,
			b,
			u,
			i,
			center,
			dl,
			dt,
			dd,
			ol,
			ul,
			li,
			fieldset,
			form,
			label,
			legend,
			table,
			caption,
			tbody,
			tfoot,
			thead,
			tr,
			th,
			td,
			article,
			aside,
			canvas,
			details,
			embed,
			figure,
			figcaption,
			footer,
			header,
			hgroup,
			menu,
			nav,
			output,
			ruby,
			section,
			summary,
			time,
			mark,
			audio,
			input,
			textarea,
			video {
				margin: 0;
				padding: 0;
				border: 0;
				font-size: 100%;
				font: inherit;
				font-family: 'Nanum';
				vertical-align: baseline;
				box-sizing: border-box;
				-webkit-tap-highlight-color: transparent;
			}
			html {
				font-size: 62.5%;
				font-family: 'Nanum';
				body {
					font-size: 1.6rem;
				}
			}
			ol,
			ul {
				list-style: none;
			}
			a {
				background-color: transparent;
				text-decoration: none;
				outline: none;
				color: inherit;
				&:active,
				&:hover {
					text-decoration: none;
					color: inherit;
					outline: 0;
				}
				-webkit-tap-highlight-color: transparent;
			}
			button {
				display: flex;
				align-items: center;
				justify-content: center;
				outline: none;
				border: none;
				background: none;
				padding: 0;
				user-select: none;
				cursor: pointer;
				white-space: nowrap;
				letter-spacing: inherit;
				font: inherit;
				color: inherit;
				-webkit-tap-highlight-color: transparent;
			}
			input {
				outline: none;
			}
			input[type='password'] {
				font-family: 'Jalnan';
			}
			input[type='password']::placeholder {
				font-family: 'Nanum';
			}
		`}
	/>
);
export default GlobalStyle;

export const RightIconWrapper = css`
	margin-right: 2rem;
	.button {
		border: none;
		cursor: pointer;
		padding: 1rem;
		&:focus {
			outline: none;
		}
	}
`;

export const LeftIconWrapper = css`
	flex: 1;
	margin-left: 2rem;
	.button {
		border: none;
		cursor: pointer;
		padding: 1rem;
		&:focus {
			outline: none;
		}
	}
`;
