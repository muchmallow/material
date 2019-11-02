import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "0px 11px 23px 16px"
        // '& > *': {
        //     margin: theme.spacing(0.5),
        // },
    },
    inputWrapper: {
        display: "block",
        width: "100%"
    },
    input: {
        width: '100%',
        margin: '14px 2px 18px 0'
    },
    inputIcon: {
        color: '#757575',
        "&:hover": {
            color: '#3a8378'
        }
    },
    tagsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0
    },
    chip: {
        margin: '2px 2px 2px 2px',
        transition: '0.3s',
        "&:hover": {
            border: "1px solid #3a8378"
        }
    },
}));

const Tags = () => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');
    const [tagList, setTagList] = useState([
        'Architecture',
        'Plants',
        'Animals',
        'Movies',
        'Top music drops',
    ]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value.trim());
    };

    const addNewTag = () => {
        if (!tagList.includes(inputValue)) {
            setTagList([inputValue, ...tagList]);
            setInputValue('');
        }
    };

    const handleDelete = (tagToDelete) => () => {
        setTagList((tagList) => tagList.filter(tag => tag !== tagToDelete));
    };

    const tags = tagList.map(tag => <Chip key={tag}
                                            label={tag}
                                            onDelete={handleDelete(tag)}
                                            className={classes.chip}
                                            variant="outlined"/>);

    return (
        <div className={classes.root}>
            <FormControl className={classes.inputWrapper}>
                <Input id='addTag'
                       placeholder="Please enter a tag"
                       className={classes.input}
                       onChange={handleInput}
                       value={inputValue}
                       endAdornment={
                           <InputAdornment position='end'>
                               <IconButton onClick={addNewTag}>
                                   <AddCircleOutlineIcon className={classes.inputIcon}/>
                               </IconButton>
                           </InputAdornment>
                       }
                />
            </FormControl>
            <div className={classes.tagsWrapper}>
                {tags}
            </div>
        </div>
    );
};

export default Tags;