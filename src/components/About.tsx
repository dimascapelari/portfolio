import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { about } from "../data/profile";
import { Section } from "./Section";

const numbers = [
  { value: "4+", label: "anos desenvolvendo para a web" },
  { value: "Full stack", label: "front, back, banco e deploy" },
  { value: "Design", label: "5 anos como designer gráfico" },
];

export const About = () => (
  <Section id="sobre" eyebrow="// sobre" title="Quem está do outro lado">
    <SimpleGrid columns={{ base: 1, md: 5 }} gap={{ base: "10", md: "16" }}>
      <Stack gap="5" gridColumn={{ md: "span 3" }} color="ink.muted" fontSize="lg" lineHeight="1.7">
        {about.map((paragraph) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </Stack>
      <Stack gap="4" gridColumn={{ md: "span 2" }}>
        {numbers.map((item) => (
          <Stack
            key={item.value}
            gap="1"
            p="5"
            bg="surface.card"
            border="1px solid"
            borderColor="surface.border"
            borderRadius="xl"
          >
            <Text fontFamily="heading" fontSize="2xl" fontWeight="700" color="brand.400">
              {item.value}
            </Text>
            <Text color="ink.muted">{item.label}</Text>
          </Stack>
        ))}
      </Stack>
    </SimpleGrid>
  </Section>
);
