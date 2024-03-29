import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    headerInfo: {
        padding: "0 14px 0 18px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "rgba(0, 0, 0, 0.87)"
    },
    inputButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        margin: "0 0 0 0",
    },
    leftHeaderPart: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    rightHeaderPart: {
        display: "flex",
        alignItems: "center",
    },
    rightHeaderPartButton: {
        position: "relative",
        padding: "12px"
    },
    input: {
        minWidth: "388px",
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    title: {
        fontWeight: 500,
        fontSize: "16px",
        letterSpacing: "-0.03px",
    }
}));

const MenuHeader = ({setAltView}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.headerInfo}>
                <Typography variant="subtitle1" component="p" className={classes.title}>
                    My Library
                </Typography>
                <Typography variant="subtitle2" component="span">
                    18 File(s) | 0 Folders(s) 1.8 MB
                </Typography>
            </div>
            <div className={classes.inputButtons}>
                <div className={classes.leftHeaderPart}>
                    <IconButton className={classes.button}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                    <IconButton className={classes.button}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton className={classes.button}>
                        <LocalOfferOutlinedIcon/>
                    </IconButton>
                    <Input
                        className={classes.input}
                        placeholder="Search"
                        inputProps={{'aria-label': 'Search'}}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton className={classes.iconButton} aria-label="Search">
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </div>
                <div className={classes.rightHeaderPart}>
                    <IconButton className={classes.rightHeaderPartButton} onClick={()=>setAltView(false)}>
                        <ViewModuleIcon/>
                    </IconButton>
                    <IconButton className={classes.rightHeaderPartButton} onClick={()=>setAltView(true)}>
                        <ListOutlinedIcon/>
                    </IconButton>
                </div>
            </div>
        </>
    );
};

export default MenuHeader;