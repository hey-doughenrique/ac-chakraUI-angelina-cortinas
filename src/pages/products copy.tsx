import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MdOutlineCleaningServices, MdOutlineStyle } from "react-icons/md";
import {
  RiAttachmentLine,
  RiCustomerService2Line,
  RiStarLine,
  RiSunFoggyLine,
  RiVipDiamondLine,
} from "react-icons/ri";

import { AiOutlineFieldTime } from "react-icons/ai";
import Brands from "../components/Logos/BrandsLogo";
import { CallToActionONE } from "../components/CallToAction/cta1";
import { Footer2 } from "../components/Footer/Footer 2";
import { HalfSection } from "../theme/foundations/layout";
import HeroProducts from "../components/Hero/heroProducts";
import { Menu } from "../components/Header/index";

export default function Products() {
  return (
    <>
      <Menu />

      <HeroProducts />

      <HalfSection pt={["6", "10"]} pb={["4", "0"]}>
        <Box>
          <Flex flexDir={["column", "row"]}>
            <Flex py={["4", "0"]}>
              <RiAttachmentLine size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Flexibilidade</Text>
                <Text>
                  A cortina rolô é um item muito flexível e fácil de manusear.
                  Além disso permite acionamento digital ou motorizado pro
                  controle remoto.
                </Text>
              </Box>
            </Flex>
            <Flex py={["4", "0"]}>
              <MdOutlineCleaningServices size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Fácil de Limpar</Text>
                <Text>
                  Por serem fabricadas em uma peça inteira, a sua higienização é
                  fácil e prática.
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex flexDir={["column", "row"]} pt={["0", "8"]}>
            <Flex py={["4", "0"]}>
              <RiStarLine size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Alta Durabilidade</Text>
                <Text>
                  Os tubos que sustentam a cortina geralmente são feitas com
                  materiais sólidos e resistentes como plástico e metal.
                </Text>
              </Box>
            </Flex>

            <Flex py={["4", "0"]}>
              <RiSunFoggyLine size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Proteção Solar</Text>
                <Text>
                  Ótima opção para diminuir o calor do ambiente e evitar que os
                  raios ultravioletas entrem no cômodo.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </HalfSection>

      <Box
        position={["relative", "sticky"]}
        top={["0", "36"]}
        w={["full", "400px"]}
        left={["0", "58vw"]}
        zIndex="1"
        px={["4", "0"]}
        h={["100%", "0"]}
        display={["block", "none"]}
      >
        <Box
          border="2px"
          borderRadius="4px"
          borderColor="primary.500"
          borderStyle="dashed"
          p="8"
          w="100%"
          bg="white"
        >
          <Text as="h3" pb={["4", "4"]}>
            Precisando de ajuda?
          </Text>
          <Text>
            Experimente nosso atendimento online. Agilize seu dia e converse com
            um de nossos consultores especializados
          </Text>
          <UnorderedList pt="4" pb="8">
            <ListItem>Compartilhe sua ideia</ListItem>
            <ListItem>Receba dicas e orientações técnicas</ListItem>
            <ListItem>Veja nosso mostruário de produtos</ListItem>
            <ListItem>Solicite visita para medição no local</ListItem>
            <ListItem>Receba orçamento personalizado</ListItem>
          </UnorderedList>
          <Button w="full">Entre em contato</Button>
        </Box>
      </Box>

      <HalfSection>
        <Box w={["full", "680px"]}>
          <Text as="h2" pb={["4", "10"]} pt={["14", "20"]}>
            Sobre a Cortina Rolo
          </Text>
          <Text>
            Tranquilo, aconchegante, repleto de padarias e panificadoras, bares
            e restaurantes, muito bem localizados, esse é o bom e velho bairro
            de Perdizes, lar da Housi VN Apiacás. Estamos na Rua Apiacás, 104,
            do lado da agradável Avenida Sumaré, point de ciclistas e
            esportistas de todas as idades, com muitas praças, e parques nas
            proximidades, morar em Perdizes é um privilégio que pode ser o seu.
            Aqui, você tem a praticidade de ter tudo perto, com a comodidade de
            ter também internet, TV a cabo, condomínio, água, luz e muito mais.
            Tudo incluso na sua assinatura, e você ainda pode pagar no cartão de
            crédito. Zero burocracia, zero preocupações. E quer saber mais? Os
            apês são todos mobiliados, decorados e você ainda aproveita serviços
            exclusivos, como o Hub de Apps com: Uber, Netflix, Ifood, Rappi,
            Amazon Prime, Disney Plus e tudo pra você curtir o melhor de ser
            Housi. Tá esperando o quê? Vem ser Housilover
          </Text>
          <Text as="h2" pb={["7", "10"]} pt={["14", "20"]}>
            Qual o tamanho ideal da Cortina Rolo?
          </Text>
          <Text>
            A instalação é bem fácil. Não precisa ser feita por uma pessoa
            especializada, basta saber manusear uma furadeira. A instalação pode
            ser feita no teto, na parede, dentro de sanca ou cortineiro, ou
            ainda entre vãos. Basta seguir os passos a seguir: Marque os locais
            para fazer a furação e fixação das garradeiras (seguindo as dicas do
            manual) Fure a parede ou teto com a furadeira Parafuse os suportes
            de fixação Encaixe a persiana Pronto!
          </Text>
        </Box>
      </HalfSection>

      <HalfSection>
        <Text as="h2" pb={["8", "10"]} pt={["14", "20"]}>
          Porque Angelina Cortinas
        </Text>
      </HalfSection>

      <HalfSection pb={["0", "20"]}>
        <Box>
          <Flex flexDir={["column", "row"]}>
            <Flex py={["4", "0"]}>
              <RiCustomerService2Line size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Suporte VIP</Text>
                <Text>
                  Atendimento personalizado para seu projeto que, assim como
                  você, é único.
                </Text>
              </Box>
            </Flex>
            <Flex py={["4", "0"]}>
              <AiOutlineFieldTime size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Agilidade</Text>
                <Text>
                  Melhor prazo de entrega do mercado, sem abrir mão da
                  qualidade. Pode conferir.
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex flexDir={["column", "row"]} pt={["0", "8"]}>
            <Flex py={["4", "0"]}>
              <RiVipDiamondLine size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Expertise</Text>
                <Text>
                  Nossa tradição traz a você o que há melhor em serviços e
                  customização.
                </Text>
              </Box>
            </Flex>

            <Flex py={["4", "0"]}>
              <MdOutlineStyle size={36} />
              <Box ml="4" w={["full", "320px"]}>
                <Text as="h4">Variedades</Text>
                <Text>
                  As melhores marcas, modelos e produtos do mercad a sua
                  disposição.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </HalfSection>

      <Brands />
      <CallToActionONE />
      <Footer2 />
    </>
  );
}
