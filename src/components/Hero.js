import React from 'react';
import { Button, Divider, Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import heroImage from '../assets/cleaning2.jpg'
import footerImage from '../assets/cleaning.png'
import PropTypes from 'prop-types'

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
        marginTop: theme.spacing(8),
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
const Header = ({ variant, font, children, style }) => <Typography variant={variant} style={{ ...style, fontFamily: font }}>{children}</Typography>

Header.defaultProps = {
    variant: 'h4',
    font: 'Nanum Pen Script',
}

const Hero = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            {/* <Hidden smDown> */}
            <Grid container item xs={12} className={classes.container}>
                <Hidden mdUp>
                    <Grid item xs={12} md={6} style={{ padding: 32 }}>
                        <Header style={{ marginBottom: 8 }}>깨끗한 청소가 필요할 땐?</Header>
                        <Header variant='h5' font='Noto Sans KR' style={{ fontWeight: 600 }}>청소의 달인에게 맡겨보세요!</Header>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={6} style={{ padding: 32 }}>
                    <div style={{ width: '100%', marginBottom: 32 }}>
                        <img src={heroImage} style={{ width: '100%', height: '100%' }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: 32 }}>
                    <Hidden smDown>
                        <Header variant='h3' style={{ marginBottom: 8 }}>깨끗한 청소가 필요할 땐?</Header>
                        <Header font='Noto Sans KR' style={{ fontWeight: 600 }}>청소의 달인에게 맡겨보세요!</Header>
                    </Hidden>
                    <Grid className={classes.verticalList}>
                        <Typography style={{ marginBottom: theme.spacing(1) }}>이사 및 입주 청소</Typography>
                        <Divider className={classes.divider} orientation='vertical' />
                        <Typography style={{ marginBottom: theme.spacing(1) }}>상업용 건물 청소</Typography>
                        <Divider className={classes.divider} orientation='vertical' />
                        <Typography style={{ marginBottom: theme.spacing(1) }}>스팀 카펫 청소</Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* </Hidden> */}
            {/* <Hidden mdUp>
                <Grid item xs={12}>
                    <div className={classes.container}>
                        <Header>깨끗한 청소가 필요할 땐?</Header>
                        <div style={{ width: '100%', marginBottom: 32 }}>
                            <img src={heroImage} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <Header>청소의 달인에게 맡겨보세요!</Header>
                        <Grid item xs={12} md={6} lg={6} xl={6} className={classes.verticalList}>
                            <Typography style={{ marginBottom: theme.spacing(1) }}>이사 및 입주 청소</Typography>
                            <Divider className={classes.divider} orientation='vertical' />
                            <Typography style={{ marginBottom: theme.spacing(1) }}>상업용 건물 청소</Typography>
                            <Divider className={classes.divider} orientation='vertical' />
                            <Typography style={{ marginBottom: theme.spacing(1) }}>스팀 카펫 청소</Typography>
                        </Grid>
                    </div>
                </Grid>
            </Hidden> */}
        </>
    )
}

export default Hero;