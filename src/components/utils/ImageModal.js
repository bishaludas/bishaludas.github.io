import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

const ImageModal = ({ imgSrc, imgAlt, imgWidth }) => {
  const [open, setOpen] = useState(false);
  const [imgModal, setImgModal] = useState("");

  const handleOpen = (e) => {
    setImgModal(e.target.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      maxWidth: imgWidth ? imgWidth : "80%",
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Modal
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
            <img
              src={imgModal}
              alt={imgAlt}
              className="img-fluid"
              onClick={handleOpen}
            />
          </div>
        </Fade>
      </Modal>

      <img
        src={imgSrc}
        alt={imgAlt}
        className="img-fluid"
        onClick={handleOpen}
      />
    </div>
  );
};

export default ImageModal;
