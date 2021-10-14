import { Flex, Box, Text, Image } from "@chakra-ui/react"

export function Feature2() {
    return (
        <Flex
            flexDirection={["column", "row"]}
            align="center"
            px="4"
            py={["16", "24"]}
            mx="auto"
            maxW={["100%", "1280px"]}>

            <Box>
                <Text as="h2">
                    Se preferir, venha até nosso showroom ou vamos até você
                </Text>
                <Text>
                    No nosso showroom, você poderá sentir a textura dos tecidos e combinar estilos de acessórios antes de comprar.
                </Text>
                <Text>
                    Também oferecemos visitas no local seguindo todos os protocolos de higiene.
                </Text>
            </Box>

            <Image mx="auto" src="/images/feature-2-image.svg" alt="Atendimento Online da Angelina Cortinas" />
        </Flex >
    )
}