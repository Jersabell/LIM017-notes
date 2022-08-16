import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function AlertDialogRegister({open, handleClose}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You need to validate your email"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Go to your email and check your inbox, open the link we sent 
          you to validate the account. Don't forget to check the span area.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Acept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}