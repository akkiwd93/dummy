import React, { useState } from "react";
import { RenameModel } from "./model/RenameModel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

//Redux
import { useDispatch } from "react-redux";
import { statusVal } from "../store/statusSlice";

//Custom Hook
import useAddFolder from "../hooks/useAddFolder";
// import useRenameFolder from "../hooks/useRenameFolder";
import useRemoveFolder from "../hooks/useRemoveFolder";

const iconBoxStyle = {
  margin: "0 5px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
};
const iconLabelStyle = {
  margin: "0 0 0 3px",
  fontSize: "small",
};
// const dropdownStyle = {
//   display: "flex",
//   flexDirection: "column",
//   textAlign: "end",
//   position: "absolute",
//   right: "5px",
//   top: "20px",
//   backgroundColor: "#2B1A17",
//   padding: "8px",
//   borderRadius: "4px",
// };

export function EditDropdown(props) {
  const [showRenameModel, setShowRenameModel] = useState(false);
  const { selected, setOpenModel } = props;
  const dispatch = useDispatch();

  const [handleAddRootFolder] = useAddFolder(
    false,
    null,
    selected,
    setOpenModel
  );
  const [handleRemoveFolder] = useRemoveFolder(selected, setOpenModel);

  const handleRenameFolder = () => {
    setShowRenameModel(true);
    dispatch(statusVal({ rename: true }));
    // setOpenModel(false);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={iconBoxStyle} onClick={handleAddRootFolder}>
          <FontAwesomeIcon icon={faFolderPlus} size="s" />
          <span style={iconLabelStyle}> Add </span>
        </div>
        <div style={iconBoxStyle} onClick={handleRemoveFolder}>
          <FontAwesomeIcon icon={faTrash} size="s" />
          <span style={iconLabelStyle}> Remove </span>
        </div>
        <div style={iconBoxStyle} onClick={handleRenameFolder}>
          <FontAwesomeIcon icon={faPenToSquare} size="s" />
          <span style={iconLabelStyle}> Rename </span>
        </div>
      </div>
      {showRenameModel && (
        <RenameModel
          showRenameModel={showRenameModel}
          setShowRenameModel={setShowRenameModel}
          selected={selected}
          setOpenModel={setOpenModel}
        />
      )}

      {/* <div class="dropdown-options" style={dropdownStyle}>
        <button onClick={handleAddRootFolder}> Add </button>
        <button onClick={handleRemoveFolder}> Delete </button>
        <button onClick={handleRenameFolder}> Rename </button>
        {showRenameModel && (
          <RenameModel
            showRenameModel={showRenameModel}
            setShowRenameModel={setShowRenameModel}
            selected={selected}
            setOpenModel={setOpenModel}
          />
        )}
      </div> */}

      {/* <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}
    </>
  );
}
