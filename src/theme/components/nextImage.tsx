import { Box, forwardRef } from "@chakra-ui/react";

import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
};

const NextImage = forwardRef((props: ImageProps, ref) => (
  <Box position="relative" w="full">
    <Image
      layout="responsive"
      width="100%"
      height="100%"
      objectFit="contain"
      src={props.src}
      alt={props.alt}
    />
  </Box>
));

export default NextImage;
