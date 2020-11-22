import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography } from '@material-ui/core'
import { reviews, avatarContent } from '../contents/avatarContent'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
        display: 'flex',
        // backgroundColor: '#aaa',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '@keyframes wiggle': {
        '0%': { transform: 'translateY(-5px)' },
        '50%': { transform: 'translateY(5px)' },
        '100%': { transform: 'translateY(-5px)' },
    },
    '@keyframes fade': {
        '0%': { opacity: 0 },
        '10%': { opacity: 1 },
        '90%': { opacity: 1 },
        '100%': { opacity: 0 },
    },
    avatar: {
        position: 'absolute',
        animation: `$wiggle 6s infinite`,
        transitionTimingFunction: 'ease-in-out',
        '& .MuiSvgIcon-root': {
            fill: 'none',
        }
    },
    content: {
        animation: `$fade 8s infinite`,
    },
    container: {

        width: '100%',
        maxHeight: 300,
        minHeight: 100,
        // border: '1px solid red',
        borderRadius: 10,
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[3],
        transition: 'max-height 0.6s linear',
    },
    item: {
        marginBottom: theme.spacing(1),
        '&>*': {
            marginRight: theme.spacing(1),
        }
    },
    secondaryText: {
        color: theme.palette.secondary[600],
    }
}))


const Review = () => {
    const ref = useRef(null);
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const [currentReview, setCurrentReview] = useState(reviews[1]);
    const len = reviews.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % len)
        }, 8000)
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentReview(reviews[index])
    }, [index])


    console.log(index)
    // const changePosition = (thisRef) => {
    //     console.log(thisRef.current.style.top);
    //     thisRef.current.style.top = `${Math.random() * 500}px`
    //     thisRef.current.style.left = `${Math.random() * 500}px`
    // }
    return (
        <div className={classes.root}>
            {/* <div className={classes.root} ref={ref} /> */}
            <div className={classes.container}>
                <div ref={ref} className={classes.content}>
                    <Grid item className={classes.item}>
                        <Typography className={classes.secondaryText}>{currentReview.date}</Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography>{currentReview.content}</Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography className={classes.secondaryText}>{currentReview.name}</Typography>
                    </Grid>
                </div>
            </div>
            {
                avatarContent.map(({ image, color, size, top, left, delay }) =>
                    <Avatar src={image}
                        size={size}
                        className={classes.avatar}
                        style={{ backgroundColor: color, animationDelay: delay, width: size, height: size, top: top, left: left }} />)
            }
        </div >
    );
};


export default Review;