import { Flex, HStack, Box, Heading, Text, Button, Image, UnorderedList, ListItem, ListIcon } from "@chakra-ui/react"

import {
    CheckIcon
} from '@chakra-ui/icons';

export function Feature() {
    return (
        <Flex align="center" mx="auto" flexDirection={["column", "row"]} maxW={1280}>
            <Image mx="auto" src="/images/feature-image.svg" alt="Atendimento Online da Angelina Cortinas" />
            <Box>
                <Heading>
                    Experimente o nosso atendimento online, sem compromisso
                </Heading>
                <Text>
                    Você escolhe como quer ser atendido:
                </Text>
                <UnorderedList styleType="none" spacing={3} fontFamily="DM Sans">
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
                <Button variant="solid">
                    Iniciar atendimento
                </Button>
            </Box>
        </Flex>
    )
}