import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { profile } from "../data/profile";
import { Section } from "./Section";

const external = { target: "_blank", rel: "noopener noreferrer" };

export const Contact = () => (
  <Section id="contato" eyebrow="// contato" title="Vamos conversar?">
    <Box
      p={{ base: "8", md: "14" }}
      borderRadius="2xl"
      border="1px solid"
      borderColor="surface.border"
      bgImage="radial-gradient(ellipse at 90% 10%, rgba(249,115,22,0.25), transparent 60%)"
      bgColor="surface.card"
    >
      <Heading as="h3" fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} maxW="2xl">
        Precisa de um site, sistema web ou API sob medida?
      </Heading>
      <Text color="ink.muted" fontSize="lg" mt="4" maxW="2xl">
        Estou aberto a projetos freelance. Me conta a sua ideia que eu respondo rapidinho.
      </Text>
      <Flex gap="3" mt="8" wrap="wrap">
        <Button asChild bg="brand.500" color="white" _hover={{ bg: "brand.600" }} size="lg">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </Button>
        <Button
          asChild
          variant="outline"
          borderColor="surface.border"
          color="ink.strong"
          _hover={{ borderColor: "brand.500", bg: "transparent" }}
          size="lg"
        >
          <a href={profile.links.linkedin} {...external}>
            LinkedIn
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          borderColor="surface.border"
          color="ink.strong"
          _hover={{ borderColor: "brand.500", bg: "transparent" }}
          size="lg"
        >
          <a href={profile.links.github} {...external}>
            GitHub
          </a>
        </Button>
      </Flex>
    </Box>
  </Section>
);
