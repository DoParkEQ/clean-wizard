import { Button, Divider, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { mainContent } from '../contents/middleContent';
import Slider from '../components/Slider';
import heroImage from '../assets/cleaning2.jpg'
import footerImage from '../assets/cleaning.png'
import PropTypes from 'prop-types'
import { default as HeroSection } from '../components/Hero'
import { default as MiddleSection } from '../components/Middle'
import { default as ContactSection } from '../components/Contact'
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1440,
        margin: '0 auto',
        padding: theme.spacing(4)
    },
    hero: {
        justifyContent: 'center'
    },
    container: {
        margin: theme.spacing(8, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTypography-root': {
            textAlign: 'center',
            marginBottom: theme.spacing(4),
        }
        // [theme.breakpoints.down('sm')]: {
        // },
        // [theme.breakpoints.up('sm')]: {
        //  alignItems: 'center',
        // }
    },
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
        flex: '0 0 300px',
        backgroundColor: theme.palette.secondary[400],
        borderRadius: 10,
        height: 300,
        margin: theme.spacing(1),
    },
    verticalList: {
        display: 'flex',
        alignItems: 'center',
        '&>*': {
            margin: theme.spacing(2),
        },
        '.divider': {
            height: 10,
        }
    },
    divider: {
        height: 30,
        width: 2,

    }
}))

const Main = () => {
    const classes = useStyles();
    const theme = useTheme();


    return (
        <Grid container className={classes.root}>
            <HeroSection />
            <MiddleSection />
            <Divider style={{ width: '100%' }} />
            <ContactSection stylesProp={classes.container} />
        </Grid >
    );
};

export default Main;