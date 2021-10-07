import { Flex, Container, Box, Heading, Text, Image } from "@chakra-ui/react"

export function Testimonials() {
    return (
        <Flex align="center" mx="auto" flexDirection={["column", "row"]} maxW={1080}>
            <Flex boxSize="sm" >
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="/images/customer-1.png"
                    alt="Foto de cliente da Angelina Cortinas"
                />
                <Box>
                    <Text>
                        Samuel Santos
                    </Text>
                    <Text>
                        “Excelente! Desde o atendimento até o início da negociação. Recebi muitas sugestões, desde cores a valores. Entrega no prazo fornecido.
                    </Text>
                </Box>
            </Flex>
            <Flex boxSize="sm">
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="/images/customer-2.png"
                    alt="Foto de cliente da Angelina Cortinas"
                />
                <Box>
                    <Text>
                        Marcelo Schwartz
                    </Text>
                    <Text>
                        “Fiquei impressionado com a atenção no atendimento e pontualidade na entrega e instalação. Muito satisfeito. Estão de parabéns.
                    </Text>
                </Box>
            </Flex>
            <Flex boxSize="sm">
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="/images/customer-3.png"
                    alt="Foto de cliente da Angelina Cortinas"
                />
                <Box>
                    <Text>
                        Nathalia Guedes
                    </Text>
                    <Text>
                        Ótimo atendimento, entrega no prazo, pessoas simpáticas e trabalho bem feito. Ficamos super contentes e repetiriamos a escolha. Parabéns :)
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}