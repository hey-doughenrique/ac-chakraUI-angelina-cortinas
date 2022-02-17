import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function BrandsGrid() {
  return (
    <Flex
      justify="center"
      flexDirection={["column", "row"]}
      align="center"
      px="4"
      py={["16", "24"]}
      mx="auto"
      maxW={["100%", "1280px"]}
    >
      <Stack direction={["column", "row"]} spacing="64px">
        <Box>
          <Text as="h2">Trabalhamos com os melhores</Text>
        </Box>
        <Box>
          <Image mx="auto" src="/images/amorim-logo.png" alt="Amorim Logo" />
        </Box>
        <Box>
          <Image
            mx="auto"
            src="/images/columbia-logo.png"
            alt="Columbia Logo"
          />
        </Box>
        <Box>
          <Image mx="auto" src="/images/cortex-logo.png" alt="Cortex Logo" />
        </Box>
        <Box>
          <Image mx="auto" src="/images/dohler-logo.png" alt="Dohler Logo" />
        </Box>
      </Stack>
    </Flex>
  );
}
