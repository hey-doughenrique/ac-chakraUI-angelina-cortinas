import {
  Box,
  Flex,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { ModalButton } from "../ModalDialog/modal";

export function Feature() {
  return (
    <Flex
      flexDirection={["column", "row"]}
      align="center"
      py={["16", "0"]}
      pb={["0", "0"]}
      mx="auto"
      maxW={["100%", "1280px"]}
      px={["8", "4"]}
    >
      <Box
        position="relative"
        w={["90%", "100%"]}
        flex="1"
        mr="10"
        mt={["16", "0"]}
        className="orderOne"
      >
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          src="/images/atendimento-online.png"
          alt="Atendimento Online da Angelina Cortinas"
        />
      </Box>

      <Box flex="1" className="orderTwo">
        <Text as="h2">
          Precisando de ajuda? Experimente nosso atendimento online.
        </Text>
        <Text mt="4">
          Agilize seu dia e converse com um de nossos consultores especializados
        </Text>
        <UnorderedList
          styleType="none"
          spacing={3}
          fontFamily="DM Sans"
          my="10"
        >
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Compartilhe sua ideia
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Receba dicas e orientações técnicas
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Veja nosso mostruário de produtos
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Solicite visita para medição no local
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Receba orçamento personalizado
          </ListItem>
        </UnorderedList>
        <ModalButton
          displayType="inline-flex"
          buttonText="Solicite o seu Atendimento"
          variantType="solid"
        />
      </Box>
    </Flex>
  );
}
