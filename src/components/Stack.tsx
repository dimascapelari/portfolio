import { Image, SimpleGrid, Stack as ChakraStack, Text } from "@chakra-ui/react";
import { stack } from "../data/profile";
import { Section } from "./Section";

export const Stack = () => (
  <Section id="stack" eyebrow="// stack" title="Ferramentas do dia a dia">
    <SimpleGrid columns={{ base: 3, sm: 4, md: 6 }} gap="4">
      {stack.map((tech) => (
        <ChakraStack
          key={tech.name}
          align="center"
          gap="3"
          py="6"
          bg="surface.card"
          border="1px solid"
          borderColor="surface.border"
          borderRadius="xl"
          transition="all 0.2s"
          _hover={{ borderColor: "brand.500", transform: "translateY(-2px)" }}
        >
          <Image src={tech.icon} alt="" boxSize="10" />
          <Text fontSize="sm" color="ink.muted" textAlign="center">
            {tech.name}
          </Text>
        </ChakraStack>
      ))}
    </SimpleGrid>
  </Section>
);
