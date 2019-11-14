import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import test from '../images/test.jpg';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        margin: '0 auto'
    },
    listItem: {
        maxWidth: '264px',
        padding: '',
    },
    tileBarRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    rootSubtitleHeight: {
        height: '55px'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)'
    },
    iconOk: {
        color: '#31C7AE'
    },
    tileSelect: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center"
    },
    subheaderIcon: {
        color: "#010101",
        opacity: "0.54"
    },
    subheaderGutters: {
        padding: "0 12px 0 0",
        color: "rgba(0, 0, 0, 0.87)"
    },
    listItemAlternative: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        maxWidth: "330px",
        maxHeight: "80px"
    },
    iconWrapper: {
        display: "flex",
        alignItems: "center",
        padding: "0 0 10px 0"
    },
    iconAlternative: {
        position: "relative"
    },
    imgWrapper: {
        display: "flex",
        maxHeight: "64px",
        maxWidth: "93px",
        margin: "0 9px 10px 0"
    },
    imgAlternative: {
        maxHeight: "64px",
        maxWidth: "93px"
    },
    titleWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 0 10px 0"
    },
    titleAlternative: {
        fontWeight: 500,
        fontSize: "16px",
        letterSpacing: "-0.03px",
        margin: 0
    },
    subtitleAlternative: {
        fontWeight: 600,
        fontSize: "13px",
        letterSpacing: "-0.03px",
        margin: 0,
        color: "#000000"
    }
}));

const Video = ({altView}) => {
    const classes = useStyles();
    const [tileData, setTileData] = useState([
        {
            img: test,
            title: 'Video1',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video2',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video3',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video4',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video5',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video6',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video7',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video8',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video9',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video10',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video11',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video12',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video13',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video14',
            weight: '123 Kb',
            selected: false
        },
        {
            img: test,
            title: 'Video15',
            weight: '123 Kb',
            selected: false
        }
    ]);

    const handleSelect = (title) => () => {
        setTileData(tileData.map(tile => (tile.title === title) ? {...tile, selected: !tile.selected} : tile));
    };

    const listItems = !altView ? tileData.map(tile => (
        <GridListTile key={tile.title} className={classes.listItem}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
                title={tile.title}
                subtitle={tile.weight}
                classes={{
                    titleWrapActionPosLeft: classes.tileBarRight,
                    rootSubtitle: classes.rootSubtitleHeight
                }}
                actionIcon={
                    <IconButton aria-label={`selected ${tile.title}`}
                                className={classes.icon}
                                onClick={handleSelect(tile.title)}>
                        {!tile.selected ? <CheckBoxOutlineBlankIcon/> : <CheckBoxIcon className={classes.iconOk}/>}
                    </IconButton>}
                actionPosition='left'
            />
        </GridListTile>
    )) : tileData.map(tile => (
        <div className={classes.listItemAlternative} key={tile.title}>
            <div className={classes.iconWrapper}>
                <IconButton aria-label={`selected ${tile.title}`}
                            className={classes.iconAlternative}
                            onClick={handleSelect(tile.title)}>
                    {!tile.selected ? <CheckBoxOutlineBlankIcon/> : <CheckBoxIcon className={classes.iconOk}/>}
                </IconButton>
            </div>
            <div className={classes.imgWrapper}>
                <img src={tile.img} alt={tile.title} className={classes.imgAlternative}/>
            </div>
            <div className={classes.titleWrapper}>
                <p className={classes.titleAlternative}>{tile.title}</p>
                <p className={classes.subtitleAlternative}>{tile.weight}</p>
            </div>
        </div>
    ));

    // const alternativeListItems = tileData.map(tile => (
    //     <div className={classes.listItemAlternative} key={tile.title}>
    //         <div className={classes.iconWrapper}>
    //             <IconButton aria-label={`selected ${tile.title}`}
    //                         className={classes.iconAlternative}
    //                         onClick={handleSelect(tile.title)}>
    //                 {!tile.selected ? <CheckBoxOutlineBlankIcon/> : <CheckBoxIcon className={classes.iconOk}/>}
    //             </IconButton>
    //         </div>
    //         <div className={classes.imgWrapper}>
    //             <img src={tile.img} alt={tile.title} className={classes.imgAlternative}/>
    //         </div>
    //         <div className={classes.titleWrapper}>
    //             <p className={classes.titleAlternative}>{tile.title}</p>
    //             <p className={classes.titleAlternative}>{tile.weight}</p>
    //         </div>
    //     </div>
    // ));

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} classes={{tile: classes.tileSelect}}>
                    <IconButton className={classes.subheaderIcon}>
                        <CheckBoxOutlineBlankIcon/>
                    </IconButton>
                    <ListSubheader component="div" classes={{gutters: classes.subheaderGutters}}>
                        <Typography variant="body1" component="p" className={classes.titleAlternative}>Select All</Typography>
                    </ListSubheader>
                </GridListTile>
                {listItems}
            </GridList>
        </div>
    );
};

export default Video;