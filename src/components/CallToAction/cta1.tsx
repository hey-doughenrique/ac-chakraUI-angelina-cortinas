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
            h={'380px'}
            backgroundImage="url('./images/bg-ctaONE.png')"
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            py={["20", "0"]}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack maxW={["100%", "1280px"]} textAlign={["center", "left"]}>
                    <Heading
                        color={'white'}>
                        Agilize o seu dia
                    </Heading>
                    <Text
                        color={'white'}>
                        Tem alguma projeto em mente? Inicie o seu atendimento e vamos discutir sobre o seu projeto.
                    </Text>

                    <Stack direction={['column', 'row']}>
                        <ModalButton variantType="solid" buttonText="Iniciar Atendimento" />

                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}