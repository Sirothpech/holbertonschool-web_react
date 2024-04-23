export function getFullYear() {
	const date = new Date();
	const currentDate = date.getFullYear();
	return currentDate;
}

export function getFooterCopy(isIndex) {
	if (isIndex) {
		return "Holberton School";
	} else {
		return "Holberton School main dashboard"
	}
}
