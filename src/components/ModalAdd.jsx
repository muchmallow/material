import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const ModalAdd = () => {
    const [open, setOpen] = React.useState(false);

    const handleModalClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <IconButton onClick={handleModalClick}>
                <AddCircleOutlineIcon/>
            </IconButton>
            <Dialog open={open} onClose={handleModalClick} aria-labelledby="form-dialog-add">
                <DialogTitle id="form-dialog-add">Add playlist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add a new playlist, please enter it's title and save changes.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of the new playlist"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClick} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleModalClick} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ModalAdd;