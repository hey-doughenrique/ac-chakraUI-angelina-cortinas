import {
  Box,
  Button,
  Container,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import ProductsSlider from "../Slider/sliderProducts";

export default function HeroProducts() {
  return (
    <Box as="section" w="full" bg="secondary.100" zIndex="0" pt={["40", "20"]}>
      <Container
        as={Flex}
        flexDir={["column", "column"]}
        justifyContent="space-between"
        maxW={["full", "container.xl"]}
        px={["8", "0"]}
      >
        <ProductsSlider />

        <Box
          position={["relative", "sticky"]}
          top={["0", "36"]}
          w={["full", "400px"]}
          left={["0", "70vw"]}
          zIndex="1"
          px={["4", "0"]}
          h={["100%", "0"]}
        >
          <Box
            border="2px"
            borderRadius="4px"
            borderColor="primary.500"
            borderStyle="dashed"
            p="8"
            w="100%"
            bg="white"
            display={["none", "block"]}
          >
            <Text as="h3" pb={["4", "4"]}>
              Precisando de ajuda?{" "}
            </Text>
            <Text>
              Experimente nosso atendimento online. Agilize seu dia e converse
              com um de nossos consultores especializados
            </Text>
            <UnorderedList pt="4" pb="8">
              <ListItem>Compartilhe sua ideia</ListItem>
              <ListItem>Receba dicas e orientações técnicas</ListItem>
              <ListItem>Veja nosso mostruário de produtos</ListItem>
              <ListItem>Solicite visita para medição no local</ListItem>
              <ListItem>Receba orçamento personalizado</ListItem>
            </UnorderedList>
            <Button w="full">Entre em contato</Button>
          </Box>
        </Box>

        <Flex pt="14" pb={["10", "20"]} flexDir={["column", "row"]}>
          <Text as="h1" flex="1" maxW="400px">
            Persiana Rolo
          </Text>

          <Box flex="2" maxW="320px" ml={["0", "10"]}>
            <Text as="h4">Resumo</Text>
            <Text>
              Experimente nosso atendimento online. Agilize seu dia e converse
              com um de nossos consultores especializados
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
