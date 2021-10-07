import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
} from '@chakra-ui/react';

export function CallToActionONE() {
    return (
        <Flex
            align="center" mx="auto" flexDirection={["column", "row"]}
            w={'100vw'}
            h={'380px'}
            backgroundImage="url('./images/bg-ctaONE.png')"
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack maxW={1280}>
                    <Heading
                        color={'white'}>
                        Experimente o nosso atendimento online, sem compromisso
                    </Heading>
                    <Text
                        color={'white'}>
                        Tem alguma projeto em mente? Inicie o seu atendimento e vamos discutir sobre o seu projeto.
                    </Text>

                    <Stack direction={'row'}>
                        <Button
                            bg="primary.500" pl="20" pr="20" pt="8" pb="8" color="white" fontFamily="DM Sans" fontWeight="light">
                            Iniciar atendimento
                        </Button>
                        <Button
                            bg="primary.500" pl="20" pr="20" pt="8" pb="8" color="white" fontFamily="DM Sans" fontWeight="light">
                            Converse conosco
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}