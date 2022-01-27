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
            <Image mx="auto" src="/images/feature-image.jpg" alt="Atendimento Online da Angelina Cortinas" />
            <Box>
                <Text as="h2">
                    Precisando de ajuda? Experimente nosso atendimento online.
                </Text>
                <Text mt="4" >
                    Agilize seu dia e converse com um de nossos consultores especializados
                </Text>
                <UnorderedList styleType="none" spacing={3} fontFamily="DM Sans" my="10">
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
                <ModalButton displayType="inline-flex" buttonText="Solicite o seu Atendimento" variantType="solid" />
            </Box>
        </Flex>
    )
}