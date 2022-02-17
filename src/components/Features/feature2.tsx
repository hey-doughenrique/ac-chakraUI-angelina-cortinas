import { Box, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";

export function Feature2() {
  return (
    <Flex
      flexDirection={["column", "row"]}
      align="center"
      py={["16", "0"]}
      px={["8", "20"]}
      pb={["0", "0"]}
      mx="auto"
      maxW={["100%", "1280px"]}
    >
      <Box flex="1">
        <Text as="h2">
          Se preferir, venha até nosso showroom ou vamos até você
        </Text>
        <Text mt="4">
          No nosso showroom, você poderá sentir a textura dos tecidos e combinar
          estilos de acessórios antes de comprar.
        </Text>
        <Text>
          Também oferecemos visitas no local seguindo todos os protocolos de
          higiene.
        </Text>
      </Box>

      <Box position="relative" w={["96%", "100%"]} flex="1" mr="10">
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          src="/images/feature-2-image.svg"
          alt="Atendimento Online da Angelina Cortinas"
        />
      </Box>
    </Flex>
  );
}
