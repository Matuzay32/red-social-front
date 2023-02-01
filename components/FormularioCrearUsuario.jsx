import { useEffect, useRef, useState } from "react";
import {
	Container,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	useColorModeValue,
	VStack,
	Center,
	InputGroup,
	InputRightElement,
	Checkbox,
	Link,
	Text,
	SimpleGrid,
	Box,
	Select,
} from "@chakra-ui/react";
import {
	distribution,
	countrys,
	registerUsers,
	sentimental,
	gender,
} from "../constants/users";

const FormularioCrearUsuario = ({ onClose }) => {
	const refForm = useRef();

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const [userState, setUserState] = useState(null);
	const [countryS, setCountryS] = useState([{}]);
	const [genderS, setGenderS] = useState([{}]);

	const [sentimentalS, setSentimentalS] = useState([{}]);
	const [distritionS, setDistributionS] = useState([{}]);

	useEffect(() => {
		//metodos Get
		countrys().then((x) => setCountryS(x));
		gender().then((x) => setGenderS(x));
		sentimental().then((x) => setSentimentalS(x));
		distribution().then((x) => setDistributionS(x));
		return () => {};
	}, []);

	const obtenerDatosFormulario = async (e) => {
		const { current: form } = refForm;
		const formData = new FormData(form);
		const name = formData.get("name");
		const lastname = formData.get("lastname");
		const birthday = formData.get("birthday");
		const gender = formData.get("gender");
		const sentimental = formData.get("sentimental");
		const country = formData.get("country");
		const username = formData.get("username");
		const password = formData.get("password");
		const email = formData.get("email");
		const distribution = formData.get("distribution");

		const user = {
			password,
			email,
			username,
			name,
			lastName: lastname,
			birthday: new Date(birthday),
			countryId: country,
			genderId: gender,
			sentimentalId: sentimental,
			distributionId: distribution,
		};

		if (form.checkValidity()) {
			setUserState(user);

			const datos = await registerUsers(userState);

			if (datos.status === 200) {
				swal({
					title: "User Created!",
					text: `Bienvenido ${user.name} `,
					icon: "success",
				});
				form.reset();
				onClose(false);
			} else {
				swal({
					title: "¡Error!",
					text: ` ${
						datos?.message
							? "El usuario con email" +
							  user.email +
							  " ya existe"
							: "No se pudo crear el usuario intente nuevamente"
					}`,
					icon: "error",
				});
			}
		} else {
			const invalidFields =
				form.querySelectorAll("input:invalid");
			const reversedFields = [
				...invalidFields,
			].reverse();
			reversedFields.forEach((campo) => {
				swal({
					title: "¡Error!",
					text: `${campo.name} es inválido: ${campo.validationMessage}`,
					icon: "error",
				});
			});
		}
	};

	return (
		<Center>
			<Stack spacing={4}>
				<VStack
					ref={refForm}
					as="form"
					boxSize={{
						base: "xs",
						sm: "sm",
						md: "md",
					}}
					h="max-content !important"
					bg={useColorModeValue("white", "gray.700")}
					rounded="lg"
					p={{ base: 2, sm: 10 }}
					spacing={8}>
					<VStack spacing={4} w="100%">
						<SimpleGrid columns={2} spacing={5}>
							<FormControl id="name">
								<FormLabel>Name</FormLabel>
								<Input
									rounded="md"
									type="text"
									name="name"
									required
								/>
							</FormControl>

							<FormControl id="lastname">
								<FormLabel>Lastname</FormLabel>
								<Input
									rounded="md"
									type="text"
									name="lastname"
								/>
							</FormControl>
						</SimpleGrid>

						<SimpleGrid columns={2} spacing={5}>
							<FormControl id="birthday">
								<FormLabel>Birthday</FormLabel>
								<Input
									rounded="md"
									type="date"
									name="birthday"
									required
								/>
							</FormControl>

							<FormControl id="gender">
								<FormLabel>Gender</FormLabel>
								<Select name="gender" required>
									{/* {genderS?.map((e) => {
										return (
											<option
												key={e._id}
												value={e._id}>
												{e.name}
											</option>
										);
									})} */}
								</Select>
							</FormControl>
						</SimpleGrid>

						<FormControl id="country">
							<FormLabel>Country</FormLabel>
							<Select name="country" required>
								{/* {countryS?.map((e) => {
									return (
										<option
											key={e._id}
											value={e._id}>
											{e.name}
										</option>
									);
								})} */}
							</Select>
						</FormControl>

						<FormControl id="sentimental">
							<FormLabel>Sentimental</FormLabel>
							<Select name="sentimental" required>
								{/* {sentimentalS?.map((e) => {
									return (
										<option
											key={e._id}
											value={e._id}>
											{e.name}
										</option>
									);
								})} */}
							</Select>
						</FormControl>

						<FormControl id="distribution">
							<FormLabel>Tipo de cuenta</FormLabel>
							<Select name="distribution" required>
								{/* {distritionS?.map((e) => {
									return (
										<option
											key={e._id}
											value={e._id}>
											{e.name}
										</option>
									);
								})} */}
							</Select>
						</FormControl>

						<FormControl id="email">
							<FormLabel>Email</FormLabel>
							<Input
								rounded="md"
								name="email"
								required
								type="email"
							/>
						</FormControl>

						<FormControl id="username">
							<FormLabel>Username</FormLabel>
							<Input
								name="username"
								required
								rounded="md"
								type="text"
							/>
						</FormControl>

						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<InputGroup size="md">
								<Input
									name="password"
									required
									rounded="md"
									type={show ? "text" : "password"}
								/>
								<InputRightElement width="4.5rem">
									<Button
										h="1.75rem"
										size="sm"
										rounded="md"
										bg={useColorModeValue(
											"gray.300",
											"gray.700"
										)}
										_hover={{
											bg: useColorModeValue(
												"gray.400",
												"gray.800"
											),
										}}
										onClick={handleClick}>
										{show ? "Hide" : "Show"}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
					</VStack>

					<VStack w="100%">
						<Button
							onClick={(e) =>
								obtenerDatosFormulario(e)
							}
							bg="teal"
							color="white"
							_hover={{
								bg: "teal.500",
							}}
							rounded="md"
							w="100%">
							Create
						</Button>
					</VStack>
				</VStack>
			</Stack>
		</Center>
	);
};
export default FormularioCrearUsuario;
