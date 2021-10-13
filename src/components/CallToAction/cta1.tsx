import {
    Stack,
    Flex,
    Text,
    VStack,
    Box,
    useBreakpointValue
} from '@chakra-ui/react';

import { ModalButton } from '../ModalDialog/modal'

export function CallToActionONE() {
    return (
        <Flex
            align="center" mx="auto" flexDirection={["column", "row"]}
            w={'100vw'}
            h={'480px'}
            backgroundImage="url('./images/bg-ctaONE.png')"
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            py={["20", "0"]}>
            <VStack
                mx="auto"
                maxW={["86vw", "1280px"]}
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack maxW={["100%", "580px"]} textAlign={["center", "center"]}>
                    <Text as="h2" color="white">
                        Agilize o seu dia
                    </Text>
                    <Text size="b_large" color="white">
                        Tem alguma projeto em mente? Inicie o seu atendimento e vamos discutir sobre o seu projeto.
                    </Text>

                    <Flex maxW={380}>
                        <ModalButton displayType="flex" variantType="solid" buttonText="Iniciar Atendimento" />
                    </Flex>

                </Stack>
            </VStack>
        </Flex>
    );
}