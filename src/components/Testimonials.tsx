import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import Image from "next/image";
import customerOne from "../../public/images/customer-1.png";
import customerThree from "../../public/images/customer-3.png";
import customerTwo from "../../public/images/customer-2.png";

const Depoimentos = [
  {
    photo: customerOne,
    name: "Samuel Santos",
    content:
      "Excelente! Desde o atendimento até o início da negociação. Recebi muitas sugestões, desde cores a valores. Entrega no prazo fornecido.",
  },
  {
    photo: customerTwo,
    name: "Marcelo Schwartz",
    content:
      "Fiquei impressionado com a atenção no atendimento e pontualidade na entrega e instalação. Muito satisfeito. Estão de parabéns",
  },
  {
    photo: customerThree,
    name: "Nathalia Guedes",
    content:
      "Ótimo atendimento, entrega no prazo, pessoas simpáticas e trabalho bem feito. Ficamos super contentes e repetiriamos a escolha. Parabéns :)",
  },
];

export default function Testimonials() {
  return (
    <Box
      className="Testimonials__Section"
      id="sobre"
      background={[
        "linear-gradient(4deg,#F7F6F3 46%,#ffffff 100%);",
        "linear-gradient(180deg,#F7F6F3 34%,#ffffff 20%);",
      ]}
    >
      <Flex
        id="depoimentos"
        className="Testimonials__Wrapper"
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        align="center"
        px="4"
        py={["16", "24"]}
        mx="auto"
        maxW={["100%", "1080px"]}
      >
        {Depoimentos.map((client) => {
          return (
            <>
              <Stack
                className="Testimonials__Item"
                alignItems="flex-start"
                flexDir={["row", "column"]}
                flex="1"
                pb={["40px", "0"]}
              >
                <Box
                  position="relative"
                  h="100px"
                  w="100px"
                  borderRadius="full"
                  outline="#ffffff solid 12px"
                >
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={client.photo}
                    alt={client.name}
                  />
                </Box>

                <HStack
                  className="Testimonials__Content"
                  pl={["0", "48px"]} //48px
                  spacing={7} // 28px
                  flex="1"
                >
                  <Center h={["0", "140px"]}>
                    <Divider orientation="vertical" />
                  </Center>
                  <VStack
                    className="Testimonials__Details"
                    alignItems="flex-start"
                    gap={2} // 8px
                  >
                    <Text as="h4">{client.name}</Text>
                    <Text fontSize="sm">{client.content}</Text>
                  </VStack>
                </HStack>
              </Stack>
            </>
          );
        })}
        {/* <Flex py={["2", "0"]}>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/images/customer-1.png"
            alt="Foto de cliente da Angelina Cortinas"
          />

          <Box ml={4}>
            <Text as="h4">Samuel Santos</Text>
            <Text fontSize="sm">
              “Excelente! Desde o atendimento até o início da negociação. Recebi
              muitas sugestões, desde cores a valores. Entrega no prazo
              fornecido.
            </Text>
          </Box>
        </Flex>
        <Flex py={["2", "0"]}>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/images/customer-2.png"
            alt="Foto de cliente da Angelina Cortinas"
          />
          <Box ml={4}>
            <Text as="h4">Marcelo Schwartz</Text>
            <Text fontSize="sm">
              “Fiquei impressionado com a atenção no atendimento e pontualidade
              na entrega e instalação. Muito satisfeito. Estão de parabéns.
            </Text>
          </Box>
        </Flex>
        <Flex py={["2", "0"]}>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/images/customer-3.png"
            alt="Foto de cliente da Angelina Cortinas"
          />
          <Box ml={4}>
            <Text as="h4">Nathalia Guedes</Text>
            <Text fontSize="sm">
              Ótimo atendimento, entrega no prazo, pessoas simpáticas e trabalho
              bem feito. Ficamos super contentes e repetiriamos a escolha.
              Parabéns :)
            </Text>
          </Box>
        </Flex> */}
      </Flex>
    </Box>
  );
}
