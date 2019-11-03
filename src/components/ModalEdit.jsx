import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const ModalEdit = () => {
    const [open, setOpen] = React.useState(false);

    const handleModalClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <IconButton onClick={handleModalClick}>
                <EditIcon/>
            </IconButton>
            <Dialog open={open} onClose={handleModalClick} aria-labelledby="form-dialog-edit">
                <DialogTitle id="form-dialog-edit">Edit playlist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit your playlist, please enter the new title and save changes.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New name of the playlist"
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

export default ModalEdit;