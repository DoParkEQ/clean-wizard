import React, { useState } from 'react'
import companyLogo from './assets/company_logo.png';
import { Route } from 'react-router-dom';
import Main from './pages/main'
import { AppBar, Avatar, Button, Grid, Toolbar, Typography, Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import CustomerForm from './components/CustomerForm/index'


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxWidth: '100%',
    maxHeight: '100%',
    outline: 'none',
  },
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
    padding: theme.spacing(2),
    '& .MuiTypography-root': {
      color: theme.palette.secondary[600],
    }
  },
}))

function App() {
  const classes = useStyles();

  const [open, setModalOpen] = useState(false);


  return (
    <div>
      <Modal
        open={open}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.modal}>
            <CustomerForm setModalOpen={setModalOpen} />
          </div>
        </Fade>
      </Modal>
      <AppBar className={classes.appbar}>
        <Toolbar className={clsx([classes.toolbar, classes.globalSpacing])}>
          <Avatar src={companyLogo} className={classes.avatar} />
          <Typography variant='subtitle2'>청소의 달인</Typography>
          <Button variant='contained' color='primary' onClick={() => setModalOpen(true)}>예약하기</Button>
        </Toolbar>
      </AppBar>
      <Route path={['/', '/main']} render={() => <Main setModalOpen={setModalOpen} />} />
      <div className={classes.footer}>
        <Typography>2020 Clean Wizard. All rights reserved.</Typography>
      </div>
    </div>
  );
}

export default App;
