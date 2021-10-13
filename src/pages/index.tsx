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
import { ModalButton } from '../components/ModalDialog/modal'
import { Footer } from '../components/Footer'
import { MainForm } from '../components/Forms'



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
          w={["100vw", "100vw"]}
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
          <Text as="h1" size="display3" color="white" maxW={860}>Ajudamos você a encontrar a cortina ou persiana ideal</Text>
          <Text size="b_large" color="white" maxW={["80%", "480px"]} mt="4">Tem algum projeto em mente?  Inicie o seu atendimento e vamos discutir juntos sobre a sua proposta.</Text>
          <MainForm />
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
