import { Box, Flex, Image, Text } from "@chakra-ui/react";

// const Depoimentos = {
//   data: [
//     {
//       photo: "customer-1.png",
//       name: "Douglas",
//       content: "",
//     },
//     {
//       photo: "",
//       name: "Henrique",
//       content: "",
//     },
//     {
//       photo: "",
//       name: "Jo'ao",
//       content: "",
//     },
//   ],
// };

export default function Testimonials() {
  return (
    <Box
      id="sobre"
      background={[
        "linear-gradient(4deg,#F7F6F3 46%,#ffffff 100%);",
        "linear-gradient(180deg,#F7F6F3 48%,#ffffff 20%);",
      ]}
    >
      <Flex
        id="depoimentos"
        justify="center"
        flexDirection={["column", "row"]}
        align="center"
        px="4"
        py={["16", "24"]}
        mx="auto"
        maxW={["100%", "1080px"]}
      >
        {/* {Depoimentos.data.map((client) => {
          return (
            <>
              <Flex py={["2", "0"]}>
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="/images/customer-1.png"
                  alt="Foto de cliente da Angelina Cortinas"
                />

                <Box ml={4}>
                  <Text as="h4">{client.name}</Text>
                  <Text fontSize="sm">{client.content}</Text>
                </Box>
              </Flex>
            </>
          );
        })} */}
        <Flex py={["2", "0"]}>
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
        </Flex>
      </Flex>
    </Box>
  );
}
