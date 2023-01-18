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

export const sentimental = async (
	url = "http://localhost:3000/sentimental"
) => {
	try {
		const res = await fetch(url);
		const paises = await res.json();
		return await paises;
	} catch (error) {
		console.log(error);
	}
};

export const distribution = async (
	url = "http://localhost:3000/distributions"
) => {
	try {
		const res = await fetch(url);
		const paises = await res.json();
		return await paises;
	} catch (error) {
		console.log(error);
	}
};

export const gender = async (
	url = "http://localhost:3000/gender"
) => {
	try {
		const res = await fetch(url);
		const paises = await res.json();
		return await paises;
	} catch (error) {
		console.log(error);
	}
};
