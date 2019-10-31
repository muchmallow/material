import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: '8px 13px 16px 16px',
        minWidth: 120,
    },
    selectEmpty: {
        padding: '3px 0 0 0',
    },
    label: {
        fontWeight: '500',
        fontSize: '18px',
        color: 'black',
        margin: '0',
    },
    disabled: {
        color: '#D2CACA',
    }
}));

const Filters = ({name, placeholder, id, options}) => {

    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor={id} className={classes.label}>
                {name}
            </InputLabel>
            <Select
                value={value}
                onChange={handleChange}
                inputProps={{
                    name: name,
                    id: id,
                }}
                displayEmpty
                name={name}
                className={classes.selectEmpty}
            >
                <MenuItem value="" disabled className={classes.disabled}>
                    <Typography className={classes.disabled}>
                        {placeholder}
                    </Typography>
                </MenuItem>
                <MenuItem value={'Ten'}><Typography>Ten</Typography></MenuItem>
                <MenuItem value={'Twenty'}><Typography>Twenty</Typography></MenuItem>
                <MenuItem value={'Thirty'}><Typography>Thirty</Typography></MenuItem>
            </Select>
        </FormControl>
    );
};

export default Filters;