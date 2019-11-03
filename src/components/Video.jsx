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
    }
}));

const Video = () => {
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

    const listItems = tileData.map(tile => (
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
    ));

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Select all</ListSubheader>
                </GridListTile>
                {listItems}
            </GridList>
        </div>
    );
};

export default Video;