const makeErrorMessage = (
	buttonId: string,
	isOpen: boolean,
	errorMessage?: string
) => {
	const span = document.querySelector(`#${buttonId}`) as HTMLElement;
	if (span) {
		if (isOpen) {
			span.style.display = 'none';
			return;
		}
		if (!isOpen && errorMessage) {
			span.innerHTML = errorMessage;
			span.style.display = 'block';
		}
	}
};

export default makeErrorMessage;
