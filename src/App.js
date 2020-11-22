import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Main from './pages/main'
import { AppBar, Avatar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
//import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
  globalSpacing: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 6),
    },
  },
  appbar: {
    backgroundColor: theme.palette.common.white,
    position: 'fixed',
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: theme.palette.common.white,
    justifyContent: 'space-between',
    '& .MuiTypography-root': {
      color: theme.palette.common.black,
    },
    '&>*': {
      '&:nth-last-child(2)': {
        flex: 1,
      },
    }
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Footer = (...props) => {
  return (
    <div {...props}>
      <Typography>2020 Clean Wizard. All rights reserved</Typography>
    </div>
  )
}

function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={clsx([classes.toolbar, classes.globalSpacing])}>
          <Avatar className={classes.avatar} />
          <Typography variant='subtitle2'>청소의 달인</Typography>
          <Button variant='contained' color='primary'>예약하기</Button>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography size="small">English</Typography>
      </Grid>
      <Route path='/' exact={true} component={Main} />
      <Footer className={classes.footer} />
    </div>
  );
}

export default App;
