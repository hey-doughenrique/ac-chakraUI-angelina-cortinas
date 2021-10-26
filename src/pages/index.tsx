import { AppProps } from 'next/app'

import Head from 'next/head';
import Image from 'next/image'

import { Flex, Box, Text } from "@chakra-ui/react"
import { WithSubnavigation } from '../components/Header'
import { LogoGrid } from '../components/LogoGrid/logogrid'
import { Feature } from '../components/Features/feature'
import { Feature2 } from '../components/Features/feature2'
import { BrandsGrid } from '../components/LogoGrid/brandgrid'
import { CallToActionONE } from '../components/CallToAction/cta1'
import { Feature3 } from '../components/Features/feature3'
import { Testimonials } from '../components/Testimonials/testimonials'
import { Footer2 } from '../components/Footer/Footer 2'
import { HeroForm } from '../components/Forms/heroform'


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>

      <Head>
        <title>Angelina Cortinas®</title>
        <meta name="description" content="Ajudamos você a encontrar a cortina ou persiana ideal. Solicite seu atendimento online." />

      </Head>

      <WithSubnavigation />

      <Flex
        flexDirection={["column", "row"]}
        align="center"
        px="4"
        mx="auto"
        maxW={["100%", "1280px"]}
      >
        <Box
          w={["100vw", "100vw"]}
          maxWidth={["100vw", "1280px"]}
          h="745px"
          backgroundImage="url('./images/bg-hero.png')"
          flexDirection="column"
          align="left"
          justify="center"
          borderRadius={[0, 10]}
          color="white"
          px={["5", "20"]}
          py="40"
        >
          <Text as="h1" size="display3" color="white" maxW={["100%", "860px"]}>Ajudamos você a encontrar a cortina ou persiana ideal</Text>
          <Text size="b_large" variant="normal" color="white" maxW={["100%", "620px"]} mt="4">Tem algum projeto em mente?  Inicie o seu atendimento e vamos discutir juntos sobre a sua proposta.</Text>
          <HeroForm />
        </Box>
      </Flex>
      <LogoGrid />
      <Feature3 />
      <Testimonials />
      <Feature />
      <Feature2 />
      <BrandsGrid />
      <CallToActionONE />
      <Footer2 />
    </>
  )
}
