import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from "@chakra-ui/react";
import FormularioIngreso from "./formularioIngreso";
import FormularioCrearUsuario from "../FormularioCrearUsuario";

export default function PaginaDeAcceso() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container maxW={"7xl"}>
			<Stack
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: "column", md: "row" }}>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{
							base: "3xl",
							sm: "4xl",
							lg: "6xl",
						}}>
						<Text as={"span"} position={"relative"}>
							RetoisSocial
						</Text>
						<br />
						<Text as={"span"} color={"teal"}>
							share with us
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						Welcome to our community! We are excited
						that you have decided to join us and hope
						you find people you can connect with on a
						special level. We are sure that our
						platform will offer you unique
						opportunities for connection and
						unforgettable experiences. We can't wait
						to see you grow and connect with others on
						our social network! Welcome aboard!
					</Text>

					<Stack
						w={"100%"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						p={"1px"}>
						<Button
							onClick={onOpen}
							h={"50px"}
							bg="teal"
							color="white"
							_hover={{
								bg: "teal.500",
							}}
							rounded="md"
							w="50%">
							Create Acount
						</Button>

						<Modal isOpen={isOpen} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>
									<Stack align="center">
										<Heading
											lineHeight={1.1}
											fontWeight={600}
											fontSize={{
												base: "5xl",
												sm: "5xl",
												lg: "5xl",
											}}>
											<Text
												as={"span"}
												position={"relative"}
												color={"teal"}>
												Create Acount
											</Text>
											<br />
										</Heading>
									</Stack>
								</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<FormularioCrearUsuario></FormularioCrearUsuario>
								</ModalBody>

								<ModalFooter></ModalFooter>
							</ModalContent>
						</Modal>
					</Stack>
				</Stack>

				<Flex
					_after={{
						borderRadius: "30px",
						backgroundImage:
							"linear-gradient(45deg, #00C9FF, #92FE9D)",
						content: "''",
						width: "100%",
						transform: "rotate(45deg)",
						height: "30%",
						position: "absolute",
						left: 0,
						zIndex: -1,
					}}
					borderRadius={"30px"}
					flex={1}
					justify={"center"}
					align={"center"}
					position={"relative"}
					w={"full"}>
					<FormularioIngreso></FormularioIngreso>
				</Flex>
			</Stack>
		</Container>
	);
}
