import React from 'react';
import { Avatar, Button, Grid, Hidden, Typography } from '@material-ui/core';
import instaLogo from '../assets/instagram.svg'
import kakaoLogo from '../assets/kakaotalk.svg'
import phoneLogo from '../assets/phone.svg'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    contactList: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(4),
        maxWidth: 600,
        margin: '0 auto',
    },
    item: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3, 0),
    },
    container: {
        alignItems: 'center',
        textAlign: 'center',
    },
    avatar: {
        marginBottom: theme.spacing(1)
    },
    spacing: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 0),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(8, 0),
        },
    },
}))

const Contact = ({ setModalOpen }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={clsx([classes.container, classes.spacing])}>
            <Typography className={classes.spacing} variant='h6'>달인만의 노하우로 구석구석 꼼꼼하게</Typography>
            <Button variant='outlined' color='primary' onClick={() => setModalOpen(true)}>온라인으로 예약하기</Button>
            <Grid container className={clsx([classes.contactList, classes.spacing])}>
                <Grid item xs={12} sm={4} md={4} className={classes.item} >
                    <a href='tel:+17782462613'>
                        <Avatar className={classes.avatar} variant='square' src={phoneLogo} />
                    </a>
                    <Typography>(778)-246-2613</Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} className={classes.item}>
                    <Avatar className={classes.avatar} variant='square' src={kakaoLogo} />
                    <Typography>@cleanwizard</Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} className={classes.item}>
                    <a href='http://instagram.com/_u/cleanwizard.canada/'>
                        <Avatar className={classes.avatar} variant='square' src={instaLogo} />
                    </a>
                    <Typography>@cleanwizard.canada</Typography>
                </Grid>

            </Grid>

        </Grid>

    );
};

export default Contact;