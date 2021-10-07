import { AppProps } from 'next/app'

import { Flex, Box, Input, Button, FormControl, FormLabel, Heading, Text } from "@chakra-ui/react"
import { WithSubnavigation } from '../components/Header'
import { LogoGrid } from '../components/LogoGrid/logogrid'
import { Feature } from '../components/Features/feature'
import { Feature2 } from '../components/Features/feature2'
import { BrandsGrid } from '../components/LogoGrid/brandgrid'
import { CallToActionONE } from '../components/CallToAction/cta1'
import { Feature3 } from '../components/Features/feature3'
import { Testimonials } from '../components/Testimonials/testimonials'
import { Footer } from '../components/Footer'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
      <WithSubnavigation />
      <Flex
        w="100vw"
        mt={["0", "5"]}
        align="center"
        justify="center"

      >
        <Box
          w={["100vw", "80vw"]}
          maxWidth={["100vw", "1280px"]}
          h="745"
          backgroundImage="url('./images/bg-hero.png')"
          flexDirection="column"
          align="left"
          justify="center"
          borderRadius={[0, 10]}
          color="white"
          px={["5", "20"]}
          pt="40"

        >
          <Heading as="h1" color="white" size="3xl" fontWeight="medium" maxW={860}>Ajudamos você a encontrar a cortina ou persiana ideal</Heading>
          <Text fontSize="lgpdesktop" maxW={["80%", "480px"]} fontWeight="light" mt="4">Tem algum projeto em mente?  Inicie o seu atendimento e vamos discutir juntos sobre a sua proposta.</Text>
          <Flex
            as="form"
            flexDirection={["column", "row"]}
            w="100%"
            maxWidth={["100%", "980px"]}
            bg="white"
            mt="8"
            p="8"
            borderRadius={8}
            color="neutral.500"

          >
            <FormControl id="email">
              <FormLabel>Nome</FormLabel>
              <Input
                placeholder="Digite seu nome"
                name="name"
                type="text"
                variant="flushed"
                fontFamily="DM Sans"
                fontSize="large"
              />

            </FormControl>
            <FormControl id="email">
              <FormLabel>Seu melhor email</FormLabel>
              <Input
                placeholder="exemplo@email.com.br"
                name="email"
                type="mail"
                variant="flushed"
                fontFamily="DM Sans"
                fontSize="large"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Telefone</FormLabel>
              <Input
                placeholder="(11) 9 9900-9000"
                name="phone"
                type="phone"
                variant="flushed"
                fontFamily="DM Sans"
                fontSize="large"
              />
            </FormControl>
            <Button type="submit" bg="primary.500" pl="20" pr="20" pt="8" pb="8" color="white" fontFamily="DM Sans" fontWeight="light">Iniciar Atendimento</Button>
          </Flex>
        </Box>
      </Flex>
      <LogoGrid />
      <Feature3 />
      <Testimonials />
      <Feature />
      <Feature2 />
      <BrandsGrid />
      <CallToActionONE />
      <Footer />
    </>
  )
}
