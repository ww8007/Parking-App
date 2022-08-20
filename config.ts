function required(key: string) {
	const value = process.env[key];
	if (value == null) {
		throw new Error(`Key ${key} is not undefined`);
	}
	return value;
}

export const config = {
	firebase: {
		apiKey: required('API_KEY'),
		authDomain: required('AUTH_DOMAIN'),
		projectId: required('PROJECT_ID'),
		bucket: required('BUCKET'),
		messageSenderId: required('MESSAGE_SENDER_ID'),
		appId: required('APP_ID'),
		measurementId: required('MEASUREMENTID')
	}
};
