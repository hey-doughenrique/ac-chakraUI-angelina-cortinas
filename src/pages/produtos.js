import { Box, Flex, Text } from "@chakra-ui/react";

import { Client } from "@notionhq/client";
import Link from "next/link";
import { Menu } from "../components/Header/index";
import slugify from "slugify";

export default function ProductsPage({ products }) {
  return (
    <>
      <Menu />
      <Flex
        flexDirection={["column", "column"]}
        align="center"
        py={["16", "40"]}
        px={["8", "20"]}
        pb={["0", "0"]}
        mx="auto"
        maxW={["100%", "1280px"]}
      >
        {products.map((product) => (
          <Text as="h2" key={product}>
            <Link href={`/produtos/${slugify(product).toLocaleLowerCase()}`}>
              <a>{product}</a>
            </Link>
          </Text>
        ))}
      </Flex>
    </>
  );
}

export const getStaticProps = async () => {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const products = [];

  data.results.forEach((result) => {
    if (result.type === "child_page") {
      products.push(result.child_page.title);
    }
  });

  return {
    props: {
      products,
    },
  };
};
