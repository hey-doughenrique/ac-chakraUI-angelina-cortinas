import { Box, Container, Text } from "@chakra-ui/react";

import Image from "next/image";

export default function Expertise() {
  return (
    <Box
      id="sobre"
      background={[
        "linear-gradient(4deg,#F7F6F3 46%,#ffffff 100%);",
        "linear-gradient(360deg,#F7F6F3 46%,#ffffff 0%)",
      ]}
    >
      <Box>
        <Container
          display="flex"
          mx="auto"
          pt={["0", "16"]}
          pb={["8", "10"]}
          flexDirection={["column", "row"]}
          maxWidth={["100vw", "1080px"]}
          px={["8", "4"]}
        >
          <Text as="h2" flex="1">
            São 51 anos de expertise compartilhados com você
          </Text>
          <Text mt={["4", "0"]} flex="1">
            Em 1960 ajudamos a criar a indústria têxtil no ramo da decoração no
            Brasil. Em 1970 fundamos a Angelina Cortinas e passamos a atuar como
            uma Grife de Cortinas.
          </Text>
        </Container>

        <Box maxW="1080px" mx="auto" as="div">
          <Image
            width="100%"
            height="50%"
            layout="responsive"
            objectFit="contain"
            src="/images/feature-3-image.png"
            alt="História da Angelina Cortinas"
          />
        </Box>
      </Box>
    </Box>
  );
}
