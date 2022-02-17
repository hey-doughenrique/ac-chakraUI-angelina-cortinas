import { Box, Container, Text } from "@chakra-ui/react";

import Image from "next/image";

export function Feature3() {
  return (
    <Box id="sobre" background="secondary.100">
      <Box>
        <Container
          display="flex"
          mx="auto"
          py="20"
          pb={["8", "20"]}
          flexDirection={["column", "row"]}
          maxWidth={["100vw", "1080px"]}
          px={["8", "20"]}
        >
          <Text as="h2">São 51 anos de expertise compartilhados com você</Text>
          <Text mt="4">
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
