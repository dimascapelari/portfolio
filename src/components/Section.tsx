import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export const Section = ({ id, eyebrow, title, children }: Props) => (
  <Box as="section" id={id} py={{ base: "16", md: "24" }}>
    <Container maxW="6xl" px={{ base: "5", md: "8" }}>
      <Text fontFamily="mono" fontSize="sm" color="brand.400" mb="2">
        {eyebrow}
      </Text>
      <Heading
        as="h2"
        fontFamily="heading"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="700"
        letterSpacing="-0.02em"
        mb={{ base: "8", md: "12" }}
      >
        {title}
      </Heading>
      {children}
    </Container>
  </Box>
);
