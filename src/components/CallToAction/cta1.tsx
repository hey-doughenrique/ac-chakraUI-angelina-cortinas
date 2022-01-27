import {
    Stack,
    Flex,
    Text,
    VStack,
    Box,
    Button,
    useBreakpointValue
} from '@chakra-ui/react';

import { ModalButton } from '../ModalDialog/modal'

export function CallToActionONE() {
    return (
        <Flex

            flexDirection={["column", "row"]}
            align="center"
            px="4"
            py={["45%", "40"]}
            minH={["90vh", "50vh"]}
            mx="auto"
            maxW="100vw"

            backgroundImage="url('./images/bg-ctaONE.png')"
            backgroundSize={'cover'}
            backgroundPosition={'center center'}

        >
            <VStack
                maxW={["100%", "1280px"]}
                mx="auto"
                px={useBreakpointValue({ base: 4, md: 8 })}>

                <Stack maxW={["100%", "580px"]} textAlign="center">
                    <Text as="h2" color="white">
                        Agilize o seu dia
                    </Text>
                    <Text color="white" pb={["4", "2"]}>
                        Tem alguma projeto em mente? Inicie o seu atendimento e vamos discutir sobre o seu projeto.
                    </Text>
                </Stack>

                <ModalButton displayType="inline-flex" buttonText="Iniciar agora" variantType="solid" />

            </VStack>
        </Flex >
    );
}