import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';
import CachedIcon from '@material-ui/icons/Cached';
import Divider from "@material-ui/core/Divider";
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import ShareIcon from '@material-ui/icons/Share';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        padding: '2px 16px 2px 16px'
    },
    listItemNested: {
        padding: '2px 16px 2px 72px',
    },
    listItemIcon: {
        minWidth: '24px',
        margin: '0 10px 0 0',
        color: '#757575'
    },
    foldersHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '49px'
    },
    foldersHeaderIcon: {
        // margin: '5px 14px 0 14px',
        // color: '#757575'
    }
}));

const Folders = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={classes.foldersHeader}>
                <div>
                    <IconButton>
                        <AddCircleOutlineIcon className={classes.foldersHeaderIcon}/>
                    </IconButton>
                    <IconButton>
                        <EditIcon className={classes.foldersHeaderIcon}/>
                    </IconButton>
                    <IconButton>
                        <ShareIcon className={classes.foldersHeaderIcon}/>
                    </IconButton>
                </div>
                <IconButton>
                    <DeleteIcon className={classes.foldersHeaderIcon}/>
                </IconButton>
            </div>
            <Divider/>
            <List dense>
                <ListItem button onClick={handleClick} className={classes.listItem}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>
                        <FolderIcon/>
                    </ListItemIcon>
                    <ListItemText primary="My Library"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List dense component="div" disablePadding>
                        <ListItem button className={classes.listItemNested}>
                            <ListItemIcon classes={{root: classes.listItemIcon}}>
                                <FolderIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Images"/>
                        </ListItem>
                        <ListItem button className={classes.listItemNested}>
                            <ListItemIcon classes={{root: classes.listItemIcon}}>
                                <FolderIcon/>
                            </ListItemIcon>
                            <ListItemText primary="My"/>
                        </ListItem>
                        <ListItem button className={classes.listItemNested}>
                            <ListItemIcon classes={{root: classes.listItemIcon}}>
                                <FolderIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Videos"/>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>
                        <ShareIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Shared"/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>
                        <AssignmentLateIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Unassigned"/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>
                        <CachedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Encoding"/>
                </ListItem>
            </List>
        </>
    );
};

export default Folders;