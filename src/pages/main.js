import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { default as HeroSection } from '../components/Hero'
import { default as MiddleSection } from '../components/Middle'
import { default as ContactSection } from '../components/Contact'
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1440,
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.up('up')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4),
        },
    },
    sectionContainer: {
        margin: theme.spacing(8, 0),
        width: '100%',
    }
}))

const Main = ({ setModalOpen }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <div className={classes.sectionContainer}>
                <HeroSection />
            </div>
            <div className={classes.sectionContainer}>
                <MiddleSection />
            </div>
            <Divider style={{ width: '100%' }} />
            <div className={classes.sectionContainer}>
                <ContactSection setModalOpen={setModalOpen} />
            </div>
        </Grid >
    );
};

export default Main;