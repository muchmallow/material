import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    input: {
        margin: theme.spacing(1),
    },
}));

const Tags = () => {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        {key: 0, label: 'Architecture'},
        {key: 1, label: 'Plants'},
        {key: 2, label: 'Animals'},
        {key: 3, label: 'Movies'},
        {key: 4, label: 'Top music drops'},
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) =>
            chips.filter(chip => chip.key !== chipToDelete.key));
    };

    const tags = chipData.map(data => <Chip key={data.key}
                                            label={data.label}
                                            onDelete={handleDelete(data)}
                                            className={classes.chip}
                                            variant="outlined"/>);

    return (
        <>
            <div className={classes.root}>
                <Input id='addTag'
                       placeholder="Placeholder"
                       className={classes.input}
                       inputProps={{
                           'aria-label': 'description',
                       }}
                />
                <AddCircleOutlineIcon/>
            </div>
            {tags}
        </>
    );
};

export default Tags;