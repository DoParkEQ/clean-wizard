import React from 'react';
import { Button, Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { middleContent } from '../contents/middleContent';



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
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        }
    },
    spacing: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(8, 0),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(16, 0),
        },
    },
    component: {
        margin: theme.spacing(8, 0),
    },
    action: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    contentHeader: {
        textAlign: 'center',
    },
    rightPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& div:last-child': {
            marginTop: theme.spacing(4),
        }
    },
}))

const Card = ({ heading, paragraph, component, action, classes }) => {

    return (
        <>
            <Hidden mdUp>
                <Grid container className={classes.spacing}>
                    <Grid item xs={12} >
                        <Typography gutterBottom variant='subtitle1'>{heading}</Typography>
                        <Typography >{paragraph}</Typography>
                        <div className={classes.component}>
                            {component}
                        </div>
                        <div className={classes.action}>
                            {action !== null && <Button variant='outlined' color='primary' fullWidth>견적 내보기</Button>}
                        </div>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid container className={classes.spacing}>
                    <Grid item xs={6} >
                        {component}
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5} className={classes.rightPanel}>
                        <Typography gutterBottom variant='subtitle1'>{heading}</Typography>
                        <Typography>{paragraph}</Typography>
                        <div className={classes.action}>
                            {action !== null && <Button variant='outlined' color='primary'>견적 내보기</Button>}
                        </div>
                    </Grid>
                </Grid>
            </Hidden>

        </>
    )
}

const Middle = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} className={classes.contentHeader}>
                <Typography variant='h6'>"청소의 달인에게 일을 맡겨야 하는 이유가 있나요?"</Typography>
            </Grid>
            <Grid container className={classes.container}>
                {middleContent.map((content) => <Card {...content} classes={classes} />)}
            </Grid >
        </>
    );
};

export default Middle;