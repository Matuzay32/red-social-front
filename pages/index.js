import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Box, Button } from "@chakra-ui/react";
import PaginaDeAcceso from "../components/ingresoRedSocial/PaginaDeAcceso";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return <PaginaDeAcceso></PaginaDeAcceso>;
}
