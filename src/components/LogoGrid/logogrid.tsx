import { Flex, Stack, Box, Text, Image } from "@chakra-ui/react"

export function LogoGrid() {
    return (
        <Flex
            justify="center"
            flexDirection={["column", "row"]}
            align="center"
            px="4"
            py={["24", "24"]}
            mx="auto"
            maxW={["100%", "1280px"]}>
            <Stack direction={["column", "row"]} spacing="64px">
                <Box>
                    <Text as="h2">Quem já confiou em nós</Text>
                </Box>
                <Box>
                    <Image mx="auto" src="/images/reserva-logo.png" alt="Reserva Logo" />
                </Box>
                <Box>
                    <Image mx="auto" src="/images/google-logo.png" alt="Google Logo" />
                </Box>
                <Box>
                    <Image mx="auto" src="/images/dafiti-logo.png" alt="Dafiti Logo" />
                </Box>
                <Box>
                    <Image mx="auto" src="/images/fiat-logo.png" alt="Fiat Logo" />
                </Box>
            </Stack>
        </Flex>

    )
}