import { Box, Container, SimpleGrid, Stack, Text, IconButton, Input, Button } from "@chakra-ui/react"

import { FaInstagram, FaFacebook } from 'react-icons/fa';

export function Footer() {
    return (
        <Box bg="secondary.100"
            color="neutral.900">
            <Container as={Stack} maxW={1280} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>

                    <Stack spacing={6}>
                        <Box>
                            <Text>
                                LOGO
                            </Text>
                        </Box>
                        <Text fontSize={'sm'}>
                            Somos uma herança de gerações apaixonadas por cortinas e persianas sob medidas.
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <Button label={'Facebook'} href={'#'}>
                                <FaFacebook />
                            </Button>
                            <Button label={'Facebook'} href={'#'}>
                                <FaFacebook />
                            </Button>
                            <Button label={'Facebook'} href={'#'}>
                                <FaFacebook />
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text>Atendimento</Text>
                        <Text>Segunda à Sexta das 9h às 18h.</Text>
                        <Text>Sábados das 9h às 14h.</Text>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text>Contato</Text>
                        <Text>contato@angelinacortinas.com.br</Text>
                        <Text>R. Padre Chico, 362 - Perdizes, São Paulo</Text>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text>Stay up to date</Text>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg="white"
                                border={0}
                                _focus={{
                                    bg: 'primary.500',
                                }}
                            />
                            <IconButton
                                bg="primary.500"
                                color="white"
                                _hover={{
                                    bg: 'primary.600',
                                }}
                                aria-label="Subscribe"
                                icon={<FaFacebook />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box >
    )
}