import { useState, useRef } from "react";
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

const FormularioIngreso = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const refForm = useRef();

	const obtenerDatosFormulario = (e) => {
		const { current: form } = refForm;
		const formData = new FormData(form);
		const username = formData.get("username");
		const email = formData.get("email");
		const password = formData.get("password");

		const user = { username, password, email };
		console.log(user);
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
