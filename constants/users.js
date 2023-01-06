//METODO POST LOGIN
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
//METODO POST REGISTRAR USUARIOS
export const registerUsers = async (
	user,
	url = "http://localhost:3000/auth/register"
) => {
	try {
		console.log(user);
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

export const countrys = async (
	url = "http://localhost:3000/countrys"
) => {
	try {
		const res = await fetch(url);
		const paises = await res.json();
		return await paises;
	} catch (error) {
		console.log(error);
	}
};
