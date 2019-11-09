import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from "@material-ui/icons/Search";
import Filters from './Filters';
import Tags from './Tags';
import Folders from "./Folders";
import Video from "./Video";
import MenuHeader from "./MenuHeader";

const drawerWidth = 315;

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    wrapper: {
        maxWidth: '1440px',
        flexGrow: 1,
        display: 'flex',
        margin: '0 auto',
        position: 'relative'
    },
    appBar: {
        backgroundColor: '#3a8378',
        height: '51px',
        justifyContent: 'center',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 80,
            '&:focus': {
                width: 200,
            },
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        border: "none"
    },
    drawerHeader: {
        display: 'flex',
        flexDirection: 'column',
        height: "143px",
        alignItems: 'center',
        padding: theme.spacing(0, 0),
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    },
    mainHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: '0 20px 0 20px',
        backgroundColor: "#ffffff",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    filters: {
        backgroundColor: '#3a8378',
        height: '40px',
        color: 'white',
        padding: '12px 260px 12px 16px',
    },
}));

export default function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <CssBaseline/>
                <AppBar
                    position="absolute"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        {open ? <IconButton onClick={handleDrawerClose}
                                            color="inherit"
                                            edge="start"
                                            className={classes.menuButton}>
                                {theme.direction === 'ltr' && <ChevronLeftIcon/>}
                            </IconButton>
                            : <IconButton color="inherit"
                                          aria-label="open drawer"
                                          onClick={handleDrawerOpen}
                                          edge="start"
                                          className={classes.menuButton}>
                                <MenuIcon/>
                            </IconButton>}
                        <Typography className={classes.title} variant="h6" noWrap>
                            Logo
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        {/*<IconButton onClick={handleDrawerClose}>*/}
                        {/*    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}*/}
                        {/*</IconButton>*/}
                    </div>
                    <div className={classes.filters}>
                        <Typography variant={'body2'}>Filters</Typography>
                    </div>
                    <Filters id='typePlaceholder' name='Type' placeholder='All Types'/>
                    <Filters id='usagePlaceholder' name='Usage' placeholder='All Usages'/>
                    <Filters id='agePlaceholder' name='Age' placeholder='All Ages'/>
                    <div className={classes.filters}>
                        <Typography variant={'body2'}>Tags</Typography>
                    </div>
                    <Tags/>
                    <div className={classes.filters}>
                        <Typography variant={'body2'}>Folders</Typography>
                    </div>
                    <Folders/>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.mainHeader}/>
                    <MenuHeader/>
                    <Video/>
                </main>
            </div>
        </div>
    );
}