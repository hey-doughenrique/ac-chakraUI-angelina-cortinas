import { AppProps } from 'next/app'

import Head from 'next/head';
import Image from 'next/image'

import { Flex, Box, Text, Badge, Stack, Heading } from '@chakra-ui/react'
import { WithSubnavigation } from '../components/Header'
import { Menu } from '../components/Header/index'
import { LogoGrid } from '../components/LogoGrid/logogrid'
import { Feature } from '../components/Features/feature'
import { Feature2 } from '../components/Features/feature2'
import { BrandsGrid } from '../components/LogoGrid/brandgrid'
import { CallToActionONE } from '../components/CallToAction/cta1'
import { Feature3 } from '../components/Features/feature3'
import { Testimonials } from '../components/Testimonials/testimonials'
import { Footer2 } from '../components/Footer/Footer 2'
import Slider from '../components/Slider/slider'
import { HeroForm } from '../components/Forms/heroform'
import BasicUsage from '../components/Modal';
import FormikExample from '../components/Forms/heroformik';


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>

      <Head>
        <title>Angelina Cortinas®</title>
        <meta name='description' content='Ajudamos você a encontrar a cortina ou persiana ideal. Solicite seu atendimento online.' />

      </Head>

      <Menu />

      {/* Popup */}
      {/* <BasicUsage /> */}

      <Flex
        flexDirection={['column', 'row']}
        align='center'
        px='4'
        mx='auto'
        maxW={['100%', '1280px']}
        mt={[0, 32]}
      >
        <Box
          w={['100vw', '100vw']}
          maxWidth={['100vw', '1280px']}
          h='745px'
          backgroundImage='url("./images/bg-hero.png")'
          flexDirection='column'
          align='left'
          justify='center'
          borderRadius={[0, 10]}
          color='white'
          px={['5', '20']}
          py='40'
        >

          {/* <Stack direction='row'
            align='center'>
            <Badge fontFamily='DM Sans' fontWeight='regular' color='green.800' bg='green.400' px='4' py='2' borderRadius='full'>BlackFriday</Badge>
            <Box fontFamily='DM Sans' fontWeight='regular' color='white'>Até 26% OFF em compras presenciais*</Box>
          </Stack> */}

          <Text
            my={['2rem', '2rem']}
            as='h1'
            color='white'
            maxW={['100%', '860px']}
          >
            Ajudamos você a encontrar a cortina ou persiana ideal
          </Text>

          <Text
            color='white'
            maxW={['100%', '620px']}
            mt='4'>
            Tem algum projeto em mente?  Inicie o seu atendimento online e vamos discutir juntos sobre a sua proposta.
          </Text>

          {/* <Text size='b_small' color='white'>* Oferta válida para entregas em Janeiro.</Text> */}

          <FormikExample />

        </Box>
      </Flex>

      <LogoGrid />
      <Feature3 />
      <Testimonials />
      <Flex as='section' flexDir='column'>
        <Text as='h2' textAlign='center' pb={['10', '20']}>Inspire em nosso portfólio</Text>
        <Slider />
      </Flex>
      <Feature />
      <Feature2 />
      <BrandsGrid />
      <CallToActionONE />
      <Footer2 />
    </>
  )
}
