import { Box, Container, Text } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { profile } from "./data/profile";

export const App = () => (
  <Box minH="100vh">
    <Header />
    <main>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
    <Box as="footer" borderTop="1px solid" borderColor="surface.border" py="8">
      <Container maxW="6xl" px={{ base: "5", md: "8" }}>
        <Text color="ink.muted" fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} {profile.name} · Feito com React,
          TypeScript e Chakra UI
        </Text>
      </Container>
    </Box>
  </Box>
);
