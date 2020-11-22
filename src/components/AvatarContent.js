import React from 'react';
import { Avatar, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import vccImage from '../assets/VCC.png'


const useStyles = makeStyles((theme) => ({
    avatar: {
        width: 128,
        height: 128,
        marginBottom: theme.spacing(3),
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        backgroundImage: `url(${vccImage})`,
        backgroundSize: 'cover',
        borderRadius: 10,
        boxShadow: theme.shadows[3],
        marginBottom: theme.spacing(3),
    },
}))

const AvatarContent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden smDown>
                <div className={classes.image} />
                <Typography>Building Service Worker Certificate 보유 업체</Typography>
            </Hidden>
            <Hidden mdUp>
                <Avatar src={vccImage} className={classes.avatar} />
                <Typography>Building Service Worker Certificate 보유 업체</Typography>
            </Hidden>
        </div>
    );
};

export default AvatarContent;