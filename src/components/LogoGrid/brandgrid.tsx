import { Flex, Stack, Box, Heading, Image } from "@chakra-ui/react"

export function BrandsGrid() {
    return (
        <Flex justify="center" py="20" px={["5", "20"]} mt={["60", "0"]}>
            <Stack direction={["column", "row"]} spacing="64px">
                <Box>
                    <Heading as="h2">Trabalhamos com os melhores</Heading>
                </Box>
                <Box>
                    <Image mx="auto" src="/images/amorim-logo.png" alt="Amorim Logo" />
                </Box>
                <Box>
                    <Image mx="auto" src="/images/columbia-logo.png" alt="Columbia Logo" />
                </Box>
                <Box>
                    <Image mx="auto" src="/images/cortex-logo.png" alt="Cortex Logo" />
                </Box>
                <Box>
                    <Image mx="auto" src="/images/dohler-logo.png" alt="Dohler Logo" />
                </Box>
            </Stack>
        </Flex>

    )
}