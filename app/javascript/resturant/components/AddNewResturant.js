import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ResturantFormNew from './ResturantFormNew'

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
      },
});

class AddNewResturant extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
    };

    render(){
        const { classes } = this.props;
        return (
        <div>
            <Fab color="primary" aria-label="Add" onClick={this.handleClickOpen} className={classes.fab}>
            <AddIcon />
            </Fab>
            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Add new resturant"}</DialogTitle>
                    <DialogContent>
                        <ResturantFormNew handleClose={this.handleClose} />
                    </DialogContent>
          </Dialog>
        </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AddNewResturant);

