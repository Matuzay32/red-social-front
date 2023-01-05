import { useState } from "react";
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

	return (
		<Center>
			<Stack spacing={4}>
				<VStack
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
								<Input rounded="md" type="text" />
							</FormControl>

							<FormControl id="lastname">
								<FormLabel>Lastname</FormLabel>
								<Input rounded="md" type="text" />
							</FormControl>
						</SimpleGrid>

						<SimpleGrid columns={2} spacing={10}>
							<FormControl id="birthday">
								<FormLabel>Birthday</FormLabel>
								<Input rounded="md" type="date" />
							</FormControl>

							<FormControl id="gender">
								<FormLabel>Gender</FormLabel>
								<Select>
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
							<Select>
								<option value="option1">
									Argentina
								</option>
							</Select>
						</FormControl>

						{/* Esto voy a tener que hacerlo con un map */}
						<FormControl id="sentimental">
							<FormLabel>Sentimental</FormLabel>
							<Select>
								<option value="option1">
									Soltero
								</option>

								<option value="option1">
									Soltera
								</option>

								<option value="option1">
									Comprometido
								</option>

								<option value="option1">
									Comprometida
								</option>
							</Select>
						</FormControl>

						<FormControl id="email">
							<FormLabel>Email</FormLabel>
							<Input rounded="md" type="email" />
						</FormControl>

						<FormControl id="username">
							<FormLabel>Username</FormLabel>
							<Input rounded="md" type="text" />
						</FormControl>

						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<InputGroup size="md">
								<Input
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
