import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container, Flex } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

function SliderItem({ image, ...rest }) {
  return <Image src={image} alt="Strides Logo" layout="fill" />;
}

export default function Slider() {
  return (
    <Flex as="section" w="full" align="center">
      <Container maxW="full">
        <Swiper
          freeMode={true}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderItem image="/images/portfolio-1.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="/images/Ph-Wood-Amorim.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="/images/portfolio-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem image="/images/Stillo-Amorim-3.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="/images/portfolio-3.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="/images/Rolo-Amorim-29.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="/images/portfolio-4.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="/images/Romana-Amorim-8.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem image="/images/portfolio-5.jpg" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Flex>
  );
}
