import { Flex, Stack, Box, Text, Image } from "@chakra-ui/react"

export function LogoGrid() {
    return (
        <Flex justify="center" py="20" px={["5", "20"]} mt={["60", "0"]}>
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