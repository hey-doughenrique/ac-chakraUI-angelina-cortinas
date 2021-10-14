import { Flex, Box, Text, Image, UnorderedList, ListItem, ListIcon } from "@chakra-ui/react"

import {
    CheckIcon
} from '@chakra-ui/icons';
import { ModalButton } from "../ModalDialog/modal";

export function Feature() {
    return (
        <Flex
            flexDirection={["column", "row"]}
            align="center"
            px="4"
            py={["16", "24"]}
            mx="auto"
            maxW={["100%", "1280px"]}
        >
            <Image mx="auto" src="/images/feature-image.svg" alt="Atendimento Online da Angelina Cortinas" />
            <Box>
                <Text as="h2">
                    Experimente o nosso atendimento online, sem compromisso
                </Text>
                <Text mt="4">
                    Você escolhe como quer ser atendido:
                </Text>
                <UnorderedList styleType="none" spacing={3} fontFamily="DM Sans" my="10">
                    <ListItem>
                        <ListIcon as={CheckIcon} color="green.500" />
                        Chamada por vídeo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color="green.500" />
                        Chat via Whatsapp
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color="green.500" />
                        Formulário de orçamento
                    </ListItem>
                </UnorderedList>
                <ModalButton displayType="inline-flex" sizeType="md" buttonText="Iniciar Atendimento" variantType="solid" />
            </Box>
        </Flex>
    )
}