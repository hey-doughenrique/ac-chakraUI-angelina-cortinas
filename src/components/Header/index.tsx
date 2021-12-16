import { Flex, Button, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/Link'
import { ModalButton } from '../ModalDialog/modal';


export const Menu = () => {

    const [display, changeDisplay] = useState('none')

    return (
        <Flex
        >
            <Flex
                pos="fixed"
                top={['0', '0', '1rem', '1rem']}
                right="0"
                left="0"
                align="center"
                justify="space-between"
                w="full"
                maxW="1140px"
                px={[4, 10]}
                py={[4, 0]}
                mx="auto"
                background={['white', 'white', 'white', 'white']}
                borderRadius={['none', 'none', 'full', 'full']}
                boxShadow={['none', 'none', 'xs', 'xs']}
                zIndex={99}


            >
                <Flex w={[140, 200]} >
                    <Image
                        src="/images/logo.png" alt="Logo Angelinas Cortinas"
                    />
                </Flex>

                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                    align="center">
                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Início"
                            my={3}
                            w="100%">
                            Início
                        </Button>
                    </NextLink>

                    <NextLink href="#sobre" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Sobre Nós"
                            my={3}
                            w="100%">
                            Sobre Nós
                        </Button>
                    </NextLink>

                    <NextLink href="#depoimentos" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Depoimentos"
                            my={3}
                            w="100%">
                            Depoimentos
                        </Button>
                    </NextLink>

                    <NextLink href="#contato" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contato"
                            my={3}
                            w="100%">
                            Contato
                        </Button>
                    </NextLink>

                    <Stack
                        flex={{ base: 5, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <ModalButton displayType={{ base: 'none', md: 'inline-flex' }} variantType="outline" sizeType="sm" buttonText="Converse Conosco" />
                        <ModalButton displayType={{ base: 'none', md: 'inline-flex' }} variantType="solid" sizeType="sm" buttonText="Solicitar Orçamento" />
                    </Stack>
                </Flex>



                <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={<HamburgerIcon />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={() => changeDisplay('flex')}
                />

            </Flex>

            <Flex
                w="100vw"
                bgColor="gray.50"
                zIndex={100}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                display={display}
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Close Menu"
                        size="lg"
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>


                <Flex
                    flexDir="column"
                    align="center"
                >
                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Início"
                            my={5}
                            w="100%">
                            Início
                        </Button>
                    </NextLink>

                    <NextLink href="#sobre" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Sobre Nós"
                            my={5}
                            w="100%">
                            Sobre Nós
                        </Button>
                    </NextLink>

                    <NextLink href="#depoimentos" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Depoimentos"
                            my={5}
                            w="100%">
                            Depoimentos
                        </Button>
                    </NextLink>

                    <NextLink href="#contato" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contato"
                            my={5}
                            w="100%">
                            Contato
                        </Button>
                    </NextLink>

                </Flex>
            </Flex>

        </Flex>

    )
}