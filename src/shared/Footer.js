import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4">
          <h3 className="text-center">footer column 1</h3>
          <BottomNavigation>
            <BottomNavigationAction
              label="Open Modal"
              value="recents"
              onClick={handleOpen}
              icon={<RestoreIcon />}
            />
          </BottomNavigation>
        </div>
        <div className="col-4">
          <h3 className="text-center">footer column 2</h3>
          <BottomNavigation>
            <BottomNavigationAction
              label="Open Modal"
              value="recents"
              onClick={handleOpen}
              icon={<RestoreIcon />}
            />
          </BottomNavigation>
        </div>
        <div className="col-4">
          <h3 className="text-center">footer column 3</h3>
          <BottomNavigation>
            <BottomNavigationAction
              label="Open Modal"
              value="recents"
              onClick={handleOpen}
              icon={<RestoreIcon />}
            />
          </BottomNavigation>
        </div>
      </div>

      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="modal-title">My Title</h2>
            <p id="modal-description">My Description</p>
          </div>
        </Fade>
      </Modal> */}
    </div>
  );
}
