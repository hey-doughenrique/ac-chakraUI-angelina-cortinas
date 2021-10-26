import { Flex, Box, Container, Link, FormControl, FormLabel, Stack, Text, Input, Button } from "@chakra-ui/react"

import { FaInstagram, FaFacebook } from 'react-icons/fa';

export function Footer() {
    return (
        <Flex as="section" px="8px" background="#152B47">
            <Flex color="white" maxW={["auto", "1280px"]} minH={["auto", "320px"]} alignItems="center" mx="auto">
                <Stack direction={["column", "row"]} justifyContent="space-around" spacing="50px" px="24px">
                    <Flex id="Logo and Text" direction="column" flex="1">
                        <Text color="white">LOGO</Text>
                        <Text color="#7893B0">Stop struggling with your website. Speed up your design process with Getting Things Done - Figma Design System.</Text>
                    </Flex>

                    <Flex id="Footer Links" direction="column" flex="1">
                        <Link>Home</Link>
                        <Link>Preview</Link>
                        <Link>Free Version</Link>
                        <Link>Hire a website!</Link>
                        <Link>Blog</Link>
                    </Flex>


                    <Flex id="Newsletter" direction="column" flex="1">
                        <FormControl id="newsletter">
                            <FormLabel>Stay up to date</FormLabel>
                            <Input
                                placeholder="email@example.com"
                                _placeholder={{ color: 'gray.500' }}
                                type="email"
                            />
                            <Button type="submit" size="md" variant="solid">Subscribe</Button>
                        </FormControl>
                    </Flex>
                </Stack >
            </Flex >
        </Flex >
    )
}