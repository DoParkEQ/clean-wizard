import { Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, LinearProgress, OutlinedInput, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    counter: {
        margin: theme.spacing(2, 0),
        minWidth: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>*': {
            margin: theme.spacing(0, 1),
        }
    },
}))
const setValueRange = (min, max) => (val) => {
    if (val > max) {
        return max
    }
    else if (val < min) {
        return min
    }
    else {
        return val
    }
}

const FormContent = ({ currentPageNum, updateList, list }) => {
    const classes = useStyles();
    const handleRadioChange = (event, id) => {
        const newValue = event.target.value
        console.log(newValue)
        updateList(id, newValue);
    };

    const handleCheckboxChange = (event, currentValue, id) => {

        const newValue = currentValue.includes(event.target.value) ? currentValue.filter(value => value !== event.target.value) : [...currentValue, event.target.value]
        console.log(newValue, id)
        updateList(id, newValue);
    };

    const handleInputChange = (id) => (event) => {

        const newValue = setValueRange(0, 3000)(event.target.value)

        updateList(id, newValue)
    }

    const handleCounterChange = (state) => (currentValue, id) => {

        const getCount = setValueRange(0, 10);

        const newValue = state === 'plus' ? getCount(currentValue + 1) : state === 'minus' ? getCount(currentValue - 1) : value;

        updateList(id, newValue);
    }

    const handlePlus = handleCounterChange('plus');

    const handleMinus = handleCounterChange('minus');

    return list.filter((({ page }) => page === currentPageNum)).map(({ id, type, items, currentValue }) => {
        if (type === 'counter') {
            return (
                <div className={classes.counter}>
                    <Typography style={{ flexGrow: 1 }}>{items}</Typography>
                    <IconButton onClick={() => handlePlus(currentValue, id)}>
                        <AddRoundedIcon />
                    </IconButton>
                    <Typography variant='subtitle1'>{currentValue}</Typography>
                    <IconButton onClick={() => handleMinus(currentValue, id)}>
                        <RemoveRoundedIcon />
                    </IconButton>
                </div>

            )
        }
        else if (type === 'checkbox') {
            return (
                <>
                    {items.map(item => <FormControlLabel checked={currentValue.includes(item)} label={item} onChange={(e) => handleCheckboxChange(e, currentValue, id)} value={item} control={<Checkbox color='primary' />} />)}
                </>
            )
        }
        else if (type === 'inputField') {
            return (
                <div className={classes.counter}>
                    <Typography style={{ flexGrow: 1 }}>{items}</Typography>
                    <OutlinedInput
                        style={{ width: 150 }}
                        id="outlined-adornment-amount"
                        value={currentValue}
                        type='number'
                        onChange={handleInputChange(id)}
                        endAdornment={<InputAdornment position="end">Sqft</InputAdornment>}
                        labelWidth={60}
                        notched={false}
                    />

                </div>
            )
        }
        else if (type === 'radio') {
            return (
                <FormControl>
                    <RadioGroup aria-label={id} value={currentValue} onChange={(e) => handleRadioChange(e, id)}>
                        {items.map(item => <FormControlLabel value={item} control={<Radio color='primary' />} label={item} />)}
                    </RadioGroup>
                </FormControl>
            )
        }
    })
}
export default FormContent;