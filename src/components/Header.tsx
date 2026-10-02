import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";

const items = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => (
  <Box
    as="header"
    position="sticky"
    top="0"
    zIndex="10"
    bg="rgba(12, 13, 16, 0.85)"
    backdropFilter="blur(10px)"
    borderBottom="1px solid"
    borderColor="surface.border"
  >
    <Container maxW="6xl" px={{ base: "5", md: "8" }}>
      <Flex h="16" align="center" justify="space-between">
        <Link href="#inicio" _hover={{ textDecoration: "none" }}>
          <Text fontFamily="heading" fontWeight="700" fontSize="lg" color="ink.strong">
            dimas<Text as="span" color="brand.500">.dev</Text>
          </Text>
        </Link>
        <HStack gap={{ base: "4", md: "8" }} fontSize="sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              color="ink.muted"
              _hover={{ color: "brand.400", textDecoration: "none" }}
              // no celular só cabe o essencial
              display={["Sobre", "Stack"].includes(item.label) ? { base: "none", md: "inline" } : undefined}
            >
              {item.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Container>
  </Box>
);
