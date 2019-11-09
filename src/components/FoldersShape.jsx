import React from "react";

const SELECT_PLAYLIST = "main/SELECT_PLAYLIST";
const UNSELECT_PLAYLIST = "main/UNSELECT_PLAYLIST";

const initialState = {
    selectedPlaylist: null
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PLAYLIST: {
            return {
                selectedPlaylist: action.etag
            }
        }
        case UNSELECT_PLAYLIST: {
            return {
                selectedPlaylist: null
            }
        }
        default: {
            return state;
        }
    }
};

export const selectPlaylist = (etag) => ({
    type: SELECT_PLAYLIST,
    etag
});
export const unselectPlaylist = () => ({
    type: SELECT_PLAYLIST
});

// if playlist.etag === etag && classes.selectedPlaylist
// etag to props
const handleListItemClick = (etag) => selectPlaylist(etag);
const handleBlur = () => unselectPlaylist();
// Formik -> thunk(etag, title);
// same flow onDelete

export default mainReducer;