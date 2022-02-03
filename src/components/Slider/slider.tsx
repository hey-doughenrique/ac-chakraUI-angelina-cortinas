import {
    Heading,
    Text,
    Box,
    Button,
    Flex,
    Container
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function SliderItem({ image, ...rest }) {
    return (
        <Box p={0} borderWidth='0px' textAlign='center' {...rest}>
            <Box
                w={'full'}
            >
                <Box
                    mx='auto'
                    as='div'
                    className='imageContainerNext'>
                    <Image
                        className='imageNext'
                        layout='fill'
                        src={image}
                        alt='História da Angelina Cortinas' />
                </Box>
            </Box>


        </Box>
    )
}

export default function Slider() {
    return (
        <Flex
            as='section'
            w='full'
            align='center'>

            <Container
                maxW='full'
            >

                <Swiper
                    freeMode={true}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        }
                    }}

                >
                    <SwiperSlide>
                        <SliderItem
                            image='/images/portfolio-1.jpg'

                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image='/images/Ph-Wood-Amorim-34.jpg'

                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image='/images/portfolio-2.jpg'

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem
                            image='/images/Stillo-Amorim-3.jpg'

                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image='/images/portfolio-3.jpg'

                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image='/images/Rolo-Amorim-29.jpg'

                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image='/images/portfolio-4.jpg'

                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image='/images/Romana-Amorim-8.jpg'

                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image='/images/portfolio-5.jpg'

                        />
                    </SwiperSlide>

                </Swiper >

            </Container>

        </Flex >
    );
};