import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  List,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { featured, projects } from "../data/projects";
import { Section } from "./Section";

const Tags = ({ tags }: { tags: string[] }) => (
  <Wrap gap="2">
    {tags.map((tag) => (
      <Badge
        key={tag}
        variant="outline"
        color="brand.300"
        borderColor="rgba(249,115,22,0.5)"
        bg="rgba(249,115,22,0.08)"
        borderRadius="full"
        px="3"
        py="1"
        fontWeight="500"
      >
        {tag}
      </Badge>
    ))}
  </Wrap>
);

const external = { target: "_blank", rel: "noopener noreferrer" };

export const Projects = () => (
  <Section id="projetos" eyebrow="// projetos" title="O que eu já construí">
    <Box
      bg="surface.card"
      border="1px solid"
      borderColor="surface.border"
      borderRadius="2xl"
      overflow="hidden"
    >
      <Image src={featured.cover} alt={`${featured.title} — ${featured.subtitle}`} w="100%" />

      <Stack gap="6" p={{ base: "6", md: "10" }}>
        <Box>
          <Badge bg="brand.500" color="white" borderRadius="full" px="3" mb="3">
            Projeto em destaque
          </Badge>
          <Heading as="h3" fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }}>
            {featured.title}
          </Heading>
          <Text color="brand.400" fontWeight="500">
            {featured.subtitle}
          </Text>
        </Box>

        <Text color="ink.muted" fontSize="lg" lineHeight="1.7">
          {featured.description}
        </Text>

        <List.Root gap="2" color="ink.muted" ps="5">
          {featured.highlights.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List.Root>

        <Tags tags={featured.tags} />

        <SimpleGrid columns={{ base: 2, md: 4 }} gap="3">
          {featured.screens.map((screen) => (
            <Box key={screen.src}>
              <Image
                src={screen.src}
                alt={screen.label}
                borderRadius="lg"
                border="1px solid"
                borderColor="surface.border"
                aspectRatio="16 / 10"
                objectFit="cover"
                objectPosition="top"
                w="100%"
              />
              <Text fontSize="xs" color="ink.muted" mt="2">
                {screen.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Flex gap="3" wrap="wrap">
          {featured.links.map((link, index) => (
            <Button
              key={link.href}
              asChild
              size="md"
              bg={index === 0 ? "brand.500" : "transparent"}
              color={index === 0 ? "white" : "ink.strong"}
              variant={index === 0 ? "solid" : "outline"}
              borderColor="surface.border"
              _hover={{ bg: index === 0 ? "brand.600" : "transparent", borderColor: "brand.500" }}
            >
              <a href={link.href} {...external}>
                {link.label}
              </a>
            </Button>
          ))}
        </Flex>
        <Text fontSize="xs" color="ink.muted">
          A API está no plano gratuito do Render: o primeiro acesso pode levar cerca de 50 segundos.
        </Text>
      </Stack>
    </Box>

    <SimpleGrid columns={{ base: 1, md: 3 }} gap="5" mt="8">
      {projects.map((project) => (
        <Stack
          key={project.title}
          gap="4"
          p="6"
          bg="surface.card"
          border="1px solid"
          borderColor="surface.border"
          borderRadius="xl"
          transition="all 0.2s"
          _hover={{ borderColor: "brand.500" }}
        >
          <Heading as="h3" fontFamily="heading" fontSize="xl">
            {project.title}
          </Heading>
          <Text color="ink.muted" flex="1">
            {project.description}
          </Text>
          <Tags tags={project.tags} />
          {project.links.map((link) => (
            <Link key={link.href} href={link.href} {...external} color="brand.400" fontWeight="500">
              {link.label} →
            </Link>
          ))}
        </Stack>
      ))}
    </SimpleGrid>
  </Section>
);
