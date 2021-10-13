import { Container, Box, Heading, Text, Image } from "@chakra-ui/react"

export function Feature3() {
    return (
        <Box background="secondary.100">
            <Box>
                <Container display="flex" mx="auto" py="20" flexDirection={["column", "row"]} maxW={["86vw", "1080px"]}>
                    <Text as="h2">
                        São 51 anos de expertise compartilhados com você
                    </Text>
                    <Text mt="4">
                        Em 1960 ajudamos a criar a indústria têxtil no ramo da decoração no Brasil. Em 1970 fundamos a Angelina Cortinas e passamos a atuar como uma Grife de Cortinas.
                    </Text>
                </Container>

                <Image mx="auto" pb="20" src="/images/feature-3-image.png" alt="História da Angelina Cortinas" />
            </Box>
        </Box >
    )
}