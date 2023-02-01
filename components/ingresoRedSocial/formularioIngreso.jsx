import { useState, useRef } from "react";
import { loginUsers } from "../../constants/users";
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
} from "@chakra-ui/react";
import swal from "sweetalert";

const FormularioIngreso = (e) => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const refForm = useRef();
	const [userState, setUserState] = useState(null);

	const obtenerDatosFormulario = async (e) => {
		const { current: form } = refForm;
		const formData = new FormData(form);
		const username = formData.get("username");
		const email = formData.get("email");
		const password = formData.get("password");

		const user = { username, password, email };

		setUserState(user);
		if (form.checkValidity()) {
			const datos = await loginUsers(userState);
			console.log(datos);

			if (datos.statusCode === 200) {
				swal({
					title: "¡Todo correcto!",
					text: "El login se ha realizado correctamente.",
					icon: "success",
				});
				form.reset();
			} else if (datos.statusCode === 403) {
				swal({
					title: "¡Error!",
					text: "Incorrect Password",
					icon: "error",
				});
			} else if (datos.statusCode === 404) {
				swal({
					title: "¡Error!",
					text: "Usuario no encontrado, debe crear uno",
					icon: "error",
				});
			} else {
				swal({
					title: "¡Error!",
					text: "Ha ocurrido un error, por favor intente nuevamente",
					icon: "error",
				});
			}
		} else {
			const invalidFields =
				form.querySelectorAll("input:invalid");
			const reversedFields = [
				...invalidFields,
			].reverse();
			console.log(reversedFields);
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
		<Container maxW="7xl" p={{ base: 5, md: 10 }}>
			<Center>
				<Stack spacing={4}>
					<Stack align="center">
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{
								base: "6xl",
								sm: "6xl",
								lg: "6xl",
							}}>
							<Text
								as={"span"}
								position={"relative"}
								color={"teal"}>
								Sign in
							</Text>
							<br />
						</Heading>
					</Stack>

					<VStack
						ref={refForm}
						as="form"
						boxSize={{
							base: "xs",
							sm: "sm",
							md: "md",
						}}
						h="max-content !important"
						bg={useColorModeValue(
							"white",
							"gray.700"
						)}
						rounded="lg"
						boxShadow="dark-lg"
						p={{ base: 5, sm: 10 }}
						spacing={8}>
						<VStack spacing={4} w="100%">
							<FormControl id="username">
								<FormLabel>Username</FormLabel>
								<Input
									required
									name="username"
									rounded="md"
									type="text"
								/>
							</FormControl>

							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<InputGroup size="md">
									<Input
										required
										name="password"
										rounded="md"
										type={
											show ? "text" : "password"
										}
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

							<FormControl id="email">
								<FormLabel>Email</FormLabel>
								<Input
									name="email"
									rounded="md"
									type="email"
									required
								/>
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
								Sign in
							</Button>
						</VStack>
					</VStack>
				</Stack>
			</Center>
		</Container>
	);
};

export default FormularioIngreso;
