import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Typography } from '@material-ui/core';
import { useWindowDimensions } from '../utils/hooks'
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Pagination, Autoplay]);
const useStyles = makeStyles((theme) => ({
    sliderContainer: {
        display: 'flex',
        overflowX: 'scroll',
        width: '100%',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
    sliderItem: {
        objectFit: 'cover',
        //flex: '0 0 300px',
        borderRadius: 10,
        height: '100%',
        width: '100%',
        // padding: theme.spacing(1),
    },
    overlay: {
        height: (height) => height,
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        [theme.breakpoints.up('sm')]: {
            background: 'linear-gradient(to top, white 0%, transparent 25%, transparent 75%, white 100%)',
        }
    },
    container: {
        height: (height) => height,
        width: '100%',
        position: 'relative',
    },
    swiper: {
        width: '100%',
        height: (height) => height,
    },
}))
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const getDirection = (status) => status ? 'horizontal' : 'vertical'

const Slider = ({ size, images }) => {
    const { width } = useWindowDimensions();
    const isMobile = width < 600 ? true : false
    const { mobileHeight, desktopHeight } = size
    const height = isMobile ? mobileHeight : desktopHeight;
    const classes = useStyles(height);
    return (
        <div className={classes.container}>
            <div className={classes.overlay} />
            <Swiper
                className={classes.swiper}
                direction={getDirection(isMobile)}
                initialSlide={1}
                grabCursor
                loop
                autoplay={{
                    delay: 5000,
                }}
                centeredSlides={true}
                spaceBetween={8}
                slidesPerView={1}
                breakpoints={{
                    600: {
                        slidesPerView: 1.5,
                    }
                }}
                pagination={{
                    dynamicBullets: true,
                }}
            >
                {
                    images.map(({ image }) => (<SwiperSlide>
                        <div key={image} style={{ backgroundImage: `url(${image})` }} className={classes.sliderItem} />
                    </SwiperSlide>))
                }


            </Swiper >
        </div>



    );
};

export default Slider;