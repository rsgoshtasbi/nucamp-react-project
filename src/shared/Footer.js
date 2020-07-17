import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import PhoneIcon from "@material-ui/icons/Phone";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

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
  const [phoneOpen, setPhoneOpen] = React.useState(false);
  const [emailOpen, setEmailOpen] = React.useState(false);
  const [socialOpen, setSocialOpen] = React.useState(false);

  const handlePhoneOpen = () => {
    setPhoneOpen(true);
  };
  const handlePhoneClose = () => {
    setPhoneOpen(false);
  };
  const handleEmailOpen = () => {
    setEmailOpen(true);
  };
  const handleEmailClose = () => {
    setEmailOpen(false);
  };
  const handleSocialOpen = () => {
    setSocialOpen(true);
  };
  const handleSocialClose = () => {
    setSocialOpen(false);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4">
          <h3 className="text-center">Phone Number</h3>
          <BottomNavigation>
            <BottomNavigationAction
              label="Open Modal"
              value="recents"
              onClick={handlePhoneOpen}
              icon={<PhoneIcon />}
            />
          </BottomNavigation>
        </div>
        <div className="col-4">
          <h3 className="text-center">Email</h3>
          <BottomNavigation>
            <BottomNavigationAction
              label="Open Modal"
              value="recents"
              onClick={handleEmailOpen}
              icon={<EmailIcon />}
            />
          </BottomNavigation>
        </div>
        <div className="col-4">
          <h3 className="text-center">Social</h3>
          <BottomNavigation>
            <BottomNavigationAction
              label="Open Modal"
              value="recents"
              onClick={handleSocialOpen}
              icon={<InstagramIcon />}
            />
          </BottomNavigation>
        </div>
      </div>

      {/* Phone Number Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={phoneOpen}
        onClose={handlePhoneClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={phoneOpen}>
          <div className={classes.paper}>
            <h2 id="modal-title">1-206-555-1234</h2>
          </div>
        </Fade>
      </Modal>

      {/* Email Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={emailOpen}
        onClose={handleEmailClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={emailOpen}>
          <div className={classes.paper}>
            <h2 id="modal-title">help@saveengineers.com</h2>
          </div>
        </Fade>
      </Modal>

      {/* Social Media */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={socialOpen}
        onClose={handleSocialClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={socialOpen}>
          <div className={classes.paper}>
            <h2 id="modal-title">@laidoffengineers</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
