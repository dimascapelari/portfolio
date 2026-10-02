import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { profile } from "../data/profile";

export const Hero = () => (
  <Box
    as="section"
    id="inicio"
    position="relative"
    overflow="hidden"
    bgImage="radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.28), transparent 55%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)"
    bgSize="auto, 26px 26px"
  >
    <Container
      maxW="6xl"
      px={{ base: "5", md: "8" }}
      py={{ base: "16", md: "28" }}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: "10", md: "16" }}
      >
        <Box maxW="2xl">
          <Badge
            bg="rgba(61, 220, 132, 0.12)"
            color="#3DDC84"
            borderRadius="full"
            px="3"
            py="1"
            mb="6"
            fontWeight="500"
          >
            ● Aberto a projetos freelance
          </Badge>
          <Text fontFamily="mono" color="brand.400" mb="3">
            Olá, eu sou o {profile.name}
          </Text>
          <Heading
            as="h1"
            fontFamily="heading"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.05"
            letterSpacing="-0.03em"
            fontWeight="800"
          >
            {profile.role}.
            <br />
            <Text as="span" color="brand.500">
              {profile.tagline}
            </Text>
          </Heading>
          <Text
            color="ink.muted"
            fontSize={{ base: "lg", md: "xl" }}
            mt="6"
            maxW="xl"
          >
            {profile.summary}
          </Text>
          <HStack gap="3" mt="8" flexWrap="wrap">
            <Button
              asChild
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600" }}
              size="lg"
            >
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button
              asChild
              variant="outline"
              borderColor="surface.border"
              color="ink.strong"
              _hover={{
                borderColor: "brand.500",
                color: "brand.400",
                bg: "transparent",
              }}
              size="lg"
            >
              <a href="#contato">Fale comigo</a>
            </Button>
          </HStack>
          <Text color="ink.muted" fontSize="sm" mt="6">
            {profile.location} ·{" "}
            <Link
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              color="ink.strong"
            >
              GitHub
            </Link>{" "}
            ·{" "}
            <Link
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              color="ink.strong"
            >
              LinkedIn
            </Link>
          </Text>
        </Box>
        <Image
          src={profile.photo}
          alt={profile.name}
          boxSize={{ base: "180px", md: "300px" }}
          borderRadius="full"
          objectFit="cover"
          border="4px solid"
          borderColor="brand.500"
          boxShadow="0 0 80px rgba(249, 115, 22, 0.35)"
          flexShrink="0"
        />
      </Flex>
    </Container>
  </Box>
);
