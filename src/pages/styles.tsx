import { AppProps } from 'next/app'
import Image from 'next/image'

import { Stack, Text, Box } from "@chakra-ui/react"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (

        <>
            <Stack spacing={3}>

                <Stack spacing={3} py="10">
                    <Text as="h1" size="display1">Display 1</Text>
                    <Text as="h1" size="display2">Display 2</Text>
                    <Text as="h1" size="display3">Display 3</Text>
                </Stack>

                <Stack spacing={3} py="10">
                    <Text as="h1">Heading 1</Text>
                    <Text as="h2">Heading 2</Text>
                    <Text as="h3">Heading 3</Text>
                    <Text as="h4">Heading 4</Text>
                </Stack>

                <Stack maxW={680} spacing={50} py="10">
                    <Text size="b_large" maxW={680}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    <Text size="b_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>

                </Stack>

                <Box>
                    <Image
                        src={'/images/feature-image.svg'}
                        alt="Girl coding"
                        layout="fill"
                    />
                </Box>




            </Stack>
        </>
    )
}