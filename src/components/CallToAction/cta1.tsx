import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
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
                <Stack maxW={["100%", "380px"]} textAlign={["center", "center"]}>
                    <Heading
                        color={'white'}>
                        Agilize o seu dia
                    </Heading>
                    <Text
                        color={'white'}
                        pb="4">
                        Tem alguma projeto em mente? Inicie o seu atendimento e vamos discutir sobre o seu projeto.
                    </Text>

                    <ModalButton displayType="flex" variantType="solid" buttonText="Iniciar Atendimento" />


                </Stack>
            </VStack>
        </Flex>
    );
}