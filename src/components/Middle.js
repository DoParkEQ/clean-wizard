import React from 'react';
import { Button, Divider, Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { middleContent } from '../contents/middleContent';
import clsx from 'clsx';


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
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(8, 0),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiTypography-root': {
                textAlign: 'center',
                marginBottom: theme.spacing(4),
            }
        },
        [theme.breakpoints.up('sm')]: {
            alignItems: 'center',
        }
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

    },
    alignCenter: {
        display: 'flex',
        justifyContent: 'center',
    },
    spacing: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(8, 0),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(16, 0),
        },
    },
    action: {
        paddingTop: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center'
        },
    }
}))

const Card = ({ heading, paragraph, component, action, classes }) => {

    return (
        <>
            <Hidden mdUp>
                <Grid item xs={12} className={classes.spacing}>
                    <Typography variant='subtitle1'>{heading}</Typography>
                    <Typography>{paragraph}</Typography>
                    {component}
                    <div className={classes.action}>
                        {action}
                    </div>
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid item xs={6} className={classes.spacing}>
                    {component}
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={5} className={classes.spacing}>
                    <Typography variant='subtitle1'>{heading}</Typography>
                    <Typography>{paragraph}</Typography>
                    <div className={classes.action}>
                        {action}
                    </div>
                </Grid>
            </Hidden>
        </>
    )
}

const Middle = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12} style={{ margin: 64 }}>
                    <Typography variant='h6' style={{ textAlign: 'center' }}>청소의 달인에게 일을 맡겨야 하는 이유가 있나요?</Typography>
                </Grid>
                {middleContent.map((content) => <Card {...content} classes={classes} />)}
            </Grid >
        </>
    );
};

export default Middle;