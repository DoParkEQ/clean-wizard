import React from 'react';
import { Divider, Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import heroImage from '../assets/cleaning2.jpg'


const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiTypography-root': {
                textAlign: 'center',
            }
        },
        [theme.breakpoints.up('sm')]: {
            alignItems: 'center',
        },

    },
    verticalList: {
        marginTop: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        '&>*': {
            textAlign: 'center',
        },
    },
    divider: {
        margin: theme.spacing(2),
        height: 30,
        width: 2,
    },
    spacing: {
        padding: theme.spacing(4),
    },
    image: {
        width: '100%',
        height: '100%',
    }
}))
const Header = ({ variant, font, children, style }) => <Typography variant={variant} style={{ ...style, fontFamily: font }}>{children}</Typography>

Header.defaultProps = {
    variant: 'h4',
    font: 'Nanum Pen Script',
}

const Hero = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container item xs={12} className={classes.container}>
                <Hidden mdUp>
                    <Grid item xs={12}>
                        <Header>깨끗한 청소가 필요할 땐?</Header>
                        <Header variant='h5' font='Noto Sans KR' style={{ fontWeight: 600 }}>청소의 달인에게 맡겨보세요!</Header>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.spacing}>
                            <img src={heroImage} className={classes.image} />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.verticalList}>
                        <Typography>이사 및 입주 청소</Typography>
                        <Divider className={classes.divider} orientation='vertical' />
                        <Typography >상업용 건물 청소</Typography>
                        <Divider className={classes.divider} orientation='vertical' />
                        <Typography >스팀 카펫 청소</Typography>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item xs={12} md={6}>
                        <div className={classes.spacing}>
                            <img src={heroImage} className={classes.image} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={1} />
                    <Grid item xs={12} md={5} >
                        <Header variant='h3'>깨끗한 청소가 필요할 땐?</Header>
                        <Header font='Noto Sans KR' style={{ fontWeight: 600 }}>청소의 달인에게 맡겨보세요!</Header>
                        <Grid className={classes.verticalList}>
                            <Typography>이사 및 입주 청소</Typography>
                            <Divider className={classes.divider} orientation='vertical' />
                            <Typography >상업용 건물 청소</Typography>
                            <Divider className={classes.divider} orientation='vertical' />
                            <Typography >스팀 카펫 청소</Typography>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
        </>
    )
}

export default Hero;