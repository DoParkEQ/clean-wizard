import { Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, LinearProgress, OutlinedInput, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { formContentData, formParagraphs } from './contents'
import CustomerInfo from './CustomerInfo';
import Alert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles'


const checkList = [['cleaningType'],
['dwellingType'],
['roomNum', 'bathNum', 'sqftSize'],
['carpetType', 'carpetRoomNum'],
['name', 'phone', 'address', 'date']];

const useStyles = makeStyles((theme) => ({
    alert: {
        width: '100%',
        transition: 'all 0.8s'
    },
    root: {
        padding: theme.spacing(3)
    },
    item: {
        marginBottom: theme.spacing(2)
    },
    buttonGroup: {
        marginTop: theme.spacing(2),
        '&>*': {
            marginRight: theme.spacing(1),
        }
    },
}))

const CustomerForm = ({ setModalOpen }) => {
    const classes = useStyles();
    const [currentPageNum, setCurrentPageNum] = useState(0)
    const [list, setList] = useState(formContentData)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [skipped, setSkipped] = useState(false)
    const [missing, setMissing] = useState(false)
    const totalPageNum = 4

    useEffect(() => {
        if (list[0].currentValue === '상업용 청소') {
            setSkipped(true);
        }
        else {
            setSkipped(false);
        }
    }, [list])

    useEffect(() => {
        if (missing) {
            setMissing(false)
        }
    }, [currentPageNum])

    const updateList = (id, value) => {
        const newList = list.map(item => item.id === id ? { ...item, currentValue: value } : { ...item })
        console.log(newList)
        setList(newList)
    }

    const handlePage = (state) => {
        const checker = list.filter(({ page, optional }) => page === currentPageNum && optional === false)
            .some(item => item.currentValue === item.label)

        if (skipped) {
            setIsSubmitted(true)
        }
        debugger
        if (checker) {
            switch (state) {
                case 'prev':
                    setCurrentPageNum(prev => (prev - 1))
                    break
                case 'next':
                    setMissing(true)
                    break
                case 'complete':
                    setMissing(true)
                    break
            }
        }
        else {
            switch (state) {
                case 'prev':
                    setCurrentPageNum(prev => (prev - 1))
                    break
                case 'next':
                    setCurrentPageNum(prev => (prev + 1))
                    break
                case 'complete':
                    setIsSubmitted(true)
                    break
            }
        }
    }
    console.log(currentPageNum)
    const { header, paragraph, content } = formParagraphs[currentPageNum]
    const progress = (currentPageNum + 1) / totalPageNum * 100

    console.log(isSubmitted)
    return (
        <Paper className={classes.root}>
            { !isSubmitted ? (
                <>
                    <Grid item className={classes.item}>
                        <Typography>{`${currentPageNum + 1}/${totalPageNum}`}</Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <LinearProgress variant='determinate' value={progress} />
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography variant='subtitle1'>{header}</Typography>
                        <Typography>{paragraph}</Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        {content(currentPageNum, list, updateList)}
                    </Grid>
                    {missing && <div className={classes.alert}>
                        <Alert severity='warning'>입력란이 비었습니다. 모든 칸을 다 기입했는지 확인해주세요.</Alert>
                    </div>}
                    <Grid item className={classes.buttonGroup}>
                        {currentPageNum > 0 && <Button variant='outlined' color='primary' onClick={() => handlePage('prev')}>뒤로가기</Button>}
                        {currentPageNum < totalPageNum - 1 && <Button variant='contained' color='primary' onClick={() => handlePage('next')}>다음으로</Button>}
                        {currentPageNum >= totalPageNum - 1 && <Button variant='contained' color='primary' onClick={() => handlePage('complete')}>작성완료</Button>}
                    </Grid>
                </>
            ) : (
                    <CustomerInfo skipped={skipped} setModalOpen={setModalOpen} houseInfo={list} />
                )}
        </Paper>
    );
};

export default CustomerForm;