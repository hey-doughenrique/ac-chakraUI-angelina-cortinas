import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"

export function Feature2() {
    return (
        <Flex align="center" mx="auto" py="20" flexDirection={["column", "row"]} maxW={["86vw", "1280px"]}>

            <Box>
                <Heading>
                    Se preferir, venha até nosso showroom ou vamos até você
                </Heading>
                <Text>
                    No nosso showroom, você poderá sentir a textura dos tecidos e combinar estilos de acessórios antes de comprar.
                </Text>
                <Text>
                    Também oferecemos visitas no local seguindo todos os protocolos de higiene.
                </Text>
            </Box>

            <Image mx="auto" src="/images/feature-2-image.svg" alt="Atendimento Online da Angelina Cortinas" />
        </Flex>
    )
}