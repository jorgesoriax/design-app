import Head from "next/head";
import { Container } from "@chakra-ui/react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Onboarding from "../src/components/Onboarding";
import Gallery from "../src/components/Gallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Design App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={{ base: "90%", md: "70%" }} p={0}>
        <Navbar />
        {/* <Hero/> */}
        {/* <Onboarding/> */}
        <Gallery />
      </Container>
    </div>
  );
}
