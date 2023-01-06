export const loginUsers = async (
	user,
	url = "http://localhost:3000/auth/login"
) => {
	try {
		const res = await fetch(`${url}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const registerUsers = async (
	user,
	url = "http://localhost:3000/auth/register"
) => {
	try {
		const res = await fetch(`${url}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
