import { Client } from "@notionhq/client";
import slugify from "slugify";

const Product = ({ product }) => {
  console.log(product);
  return <pre>{JSON.stringify(product, null, 2)}</pre>;
};

export const getStaticPaths = async () => {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const paths = [];

  data.results.forEach((result) => {
    if (result.type === "child_page") {
      paths.push({
        params: {
          slug: slugify(result.child_page.title).toLocaleLowerCase(),
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const page = data.results.find((result) => {
    if (result.type === "child_page") {
      const { title } = result.child_page;
      const resultSlug = slugify(title).toLowerCase();
      return resultSlug === slug;
    }

    return false;
  });

  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  const title = page.child_page.title;
  const subtitles = [];
  const content = [];

  // blocks.results.forEach((block) => {
  //   if (block.type === "heading_2") {
  //     subtitles.push(block.heading_2.rich_text[0].plain_text);
  //   }
  // });

  blocks.results.forEach((block) => {
    if (block.type === "paragraph") {
      content.push(block.id);
    }
  });

  return {
    props: {
      product: blocks,
    },
  };
};

export default Product;
