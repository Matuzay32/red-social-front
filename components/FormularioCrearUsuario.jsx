import { useRef, useState } from "react";
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

const FormularioCrearUsuario = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const refForm = useRef();

	const obtenerDatosFormulario = (e) => {
		const { current: form } = refForm;
		const formData = new FormData(form);
		const name = formData.get("name");
		const lastname = formData.get("lastname");
		const gender = formData.get("gender");
		const sentimental = formData.get("sentimental");
		const country = formData.get("country");
		const username = formData.get("username");
		const password = formData.get("password");
		const email = formData.get("email");

		const user = {
			name,
			lastname,
			gender,
			sentimental,
			username,
			password,
			email,
			country,
		};
		//Utilizo la funcion check Validity para validar el input esta es interna del DOM
		if (form.checkValidity()) {
			console.log(user);
			swal({
				title: "¡Todo correcto!",
				text: "El formulario se ha enviado correctamente.",
				icon: "success",
			});
		} else {
			//muestra los campos que no son correctos
			const invalidFields =
				form.querySelectorAll(":invalid");
			invalidFields.forEach((campo) => {
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
					p={{ base: 5, sm: 10 }}
					spacing={8}>
					<VStack spacing={4} w="100%">
						<SimpleGrid columns={2} spacing={10}>
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
									required
								/>
							</FormControl>
						</SimpleGrid>

						<SimpleGrid columns={2} spacing={10}>
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
									<option value="option1">
										Man
									</option>
									<option value="option2">
										Women
									</option>
								</Select>
							</FormControl>
						</SimpleGrid>

						{/* Esto voy a tener que hacerlo con un map */}
						<FormControl id="country">
							<FormLabel>Country</FormLabel>
							<Select name="country" required>
								<option value="option1">
									Argentina
								</option>
							</Select>
						</FormControl>

						{/* Esto voy a tener que hacerlo con un map */}
						<FormControl id="sentimental">
							<FormLabel>Sentimental</FormLabel>
							<Select name="sentimental" required>
								<option value="option1">
									Soltero
								</option>

								<option value="option2">
									Soltera
								</option>

								<option value="option3">
									Comprometido
								</option>

								<option value="option4">
									Comprometida
								</option>
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
