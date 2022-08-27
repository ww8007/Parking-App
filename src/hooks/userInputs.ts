import React, { useCallback, useState } from 'react';

type ReturnType<T> = [
	T,
	(e: React.ChangeEvent<HTMLInputElement>) => void,
	React.Dispatch<React.SetStateAction<T>>
];

const useInputs = <T extends object>(initialForm: T): ReturnType<T> => {
	const [form, setForm] = useState(initialForm);
	// change
	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((form) => ({ ...form, [name]: value }));
	}, []);

	return [form, onChange, setForm];
};

export default useInputs;
