import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import useRenameFolder from "../../hooks/useRenameFolder";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContentText from "@mui/material/DialogContentText";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
} from "@mui/material";

export function RenameModel(props) {
  const { setShowRenameModel, showRenameModel, selected, setOpenModel } = props;

  const selectedFolder = useSelector((state) => state.selectedFolder);

  const inputFolderName = useRef(null);
  const [disableBtn, setDisableBtn] = useState(true);

  const [handleRenameFolder] = useRenameFolder(
    inputFolderName,
    selected,
    setShowRenameModel,
    setOpenModel
  );

  const handleClose = () => {
    setShowRenameModel(false);
    setOpenModel(false);
  };
  const handleInputVal = () => {
    const value = inputFolderName.current.value.trim();
    if (value.length) {
      setDisableBtn(false);
    }
  };

  return (
    <div>
      <Dialog
        open={showRenameModel}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="sm"
      >
        {/* <DialogTitle>Rename Your "{selectedFolder.label}" Folder</DialogTitle> */}
        <DialogTitle>Rename</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <input
            type="text"
            ref={inputFolderName}
            onChange={handleInputVal}
            autoFocus
            style={{ width: "98.7%", marginTop: "8px", padding: "6px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button
            onClick={handleRenameFolder}
            variant="contained"
            disabled={disableBtn}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
