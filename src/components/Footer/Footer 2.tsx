import { Flex, Image, Box, Container, Link, FormControl, FormLabel, Stack, Text, Input, Button } from "@chakra-ui/react"

import { IoCalendarClearOutline, IoTimeOutline, IoCarOutline, IoLocationOutline, IoCallOutline } from "react-icons/io5";


export function Footer2() {
    return (
        <Flex as="section" px="8px" background="white">
            <Flex color="white" maxW={["auto", "1280px"]} minH={["auto", "320px"]} alignItems="center" mx="auto">
                <Stack direction={["column", "row"]} justifyContent="space-around" spacing="50px" px="24px" alignItems="flex-start">
                    <Flex id="Logo and Text" direction="column" flex="1">
                        <Box w={200} pt={6}>
                            <Image
                                src="/images/logonew.svg" alt="Logo Angelinas Cortinas"
                            />
                        </Box>

                        <Text>Somos uma herança de gerações apaixonadas por cortinas e persianas sob medidas.</Text>
                    </Flex>

                    <Flex id="Funcionamento" direction="column" flex="1">
                        <Flex direction="row" alignItems="center">
                            <IoTimeOutline color="red" />
                            <Text size="b_small" pl="10px" >Funcionamento</Text>
                        </Flex>
                        <Text >
                            Segunda à Sexta: 09h às 18h.<br />
                            Sábados: 09h às 14h.
                        </Text>
                        <Flex direction="row" alignItems="center">
                            <IoCalendarClearOutline color="red" />
                            <Text size="b_small" pl="10px">Atendemos com hora marcada caso seja necessário.</Text>
                        </Flex>
                    </Flex>


                    <Flex id="Funcionamento" direction="column" flex="1">
                        <Flex direction="row" alignItems="center">
                            <IoLocationOutline color="red" />
                            <Text size="b_small" pl="10px">+55 (11) 9 7272-2262</Text>
                        </Flex>
                        <Flex direction="row" alignItems="center">
                            <IoCallOutline color="red" />
                            <Text size="b_small" pl="10px">R. Padre Chico, 362 - Perdizes, São Paulo</Text>
                        </Flex>
                        <Flex direction="row" alignItems="center">
                            <IoCarOutline color="red" />
                            <Text size="b_small" pl="10px" >Temos estacionamento conveniado no local.</Text>
                        </Flex>
                    </Flex>
                </Stack >
            </Flex >
        </Flex >
    )
}