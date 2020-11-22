import React from 'react';
import { Avatar, Button, Grid, Hidden, Typography } from '@material-ui/core';
import instaLogo from '../assets/instagram.svg'
import kakaoLogo from '../assets/kakaotalk.svg'
import phoneLogo from '../assets/phone.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    item: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
    },
}))

const Contact = ({ stylesProp }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={stylesProp}>
            <Typography variant='h6'>달인만의 노하우로 구석구석 꼼꼼하게</Typography>
            <Grid>
                <Button variant='outlined' color='primary'>온라인으로 예약하기</Button>
            </Grid>
            <Grid className={classes.root}>
                <Grid item className={classes.item}>
                    <Avatar variant='square' src={phoneLogo}></Avatar>
                    <Typography>(778)-246-2613</Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Avatar variant='square' src={kakaoLogo}></Avatar>
                    <Typography>cleanwizard</Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Avatar variant='square' src={instaLogo}></Avatar>
                    <Typography>@cleanwizard</Typography>
                </Grid>
            </Grid>

        </Grid>

    );
};

export default Contact;