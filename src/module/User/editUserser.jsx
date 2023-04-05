import {
  Backdrop,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserAction } from "./UserSlice";
import { useEditStyles } from "../../style/Styles";

export const EditUser = ({ user }) => {
  const classes = useEditStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [username, setUserName] = useState(user.username);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event) => {
  //   setName(event.target.value);
  //   setUserName(event.target.value);
  // };

  const handlePost = (event) => {
    event.preventDefault();
    const data = { ...user, name, username };
    console.log("updated data", data);
    dispatch(updateUserAction(data));
    handleClose();
  };

  return (
    <div>
      <button
        className={classes.edit}
        variant={"outlined"}
        color={"primary"}
        onClick={handleOpen}
      >
        Edit
      </button>
      <Modal
        className={classes.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <Typography variant={"h5"} component={"h6"}>
              Edit Name
            </Typography>
            <form onSubmit={handlePost}>
              <TextField
                label={"Name"}
                name={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <TextField
                label={"Username"}
                name={"username"}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
              />
              <Button
                onClick={handlePost}
                variant={"contained"}
                color={"secondary"}
                className={classes.button}
              >
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
