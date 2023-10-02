import React, { useEffect, useState } from "react";
import { EditDropdown } from "../EditDropdown";
import { Tree } from "./Tree";

// Fontawesome & React Bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faFolderMinus,
  faFolder,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { statusVal } from "../../store/statusSlice";
import { selected } from "../../store/selectedFolderSlice";

const fontAwesomeStyle = {
  marginRight: "6px",
};

const listDisplaySettingStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 10px",
  borderBottom: "1px solid",
};
const settingButtonStyle = {
  border: "none",
  backgroundColor: "transparent",
};

export function Child({ node }) {
  const { children, label, keyVal } = node;

  const dispatch = useDispatch();
  dispatch(selected(node));

  const [showChildren, setShowChildren] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [hideSettingButton, setHideSettingButton] = useState(true);

  const hadleShowChildren = () => {
    setShowChildren(!showChildren);
  };

  const handleOpenModel = (evt) => {
    dispatch(statusVal({ editDropdown: true }));
    setOpenModel(!openModel);
    setHideSettingButton(!hideSettingButton);
  };

  return (
    <>
      <div onClick={() => hadleShowChildren()} style={listDisplaySettingStyle}>
        <span>
          {children && children.length !== 0 ? (
            showChildren ? (
              <>
                <FontAwesomeIcon
                  size="s"
                  icon={faFolderMinus}
                  style={fontAwesomeStyle}
                />
                {/* <span id={`folder-${keyVal}`}>{label}</span> */}
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  size="s"
                  icon={faFolderPlus}
                  style={fontAwesomeStyle}
                />
                {/* <span id={`folder-${keyVal}`}>{label}</span> */}
              </>
            )
          ) : (
            <>
              <FontAwesomeIcon
                size="s"
                icon={faFolder}
                style={fontAwesomeStyle}
              />
              {/* <span id={`folder-${keyVal}`}>{label}</span> */}
            </>
          )}
          <span id={`folder-${keyVal}`}>{label}</span>
        </span>
        <div
          className="dropdown"
          style={{ display: "flex", alignSelf: "center" }}
        >
          {/* <button style={settingButtonStyle}> */}
          {openModel && (
            <EditDropdown selected={keyVal} setOpenModel={setOpenModel} />
          )}
          <div
            style={{ boxShadow: "-6px 0px 6px -4px #aaa", paddingLeft: "13px" }}
          >
            {hideSettingButton ? (
              <FontAwesomeIcon
                id={`setting-${keyVal}`}
                icon={faAnglesLeft}
                // size="xs"
                onClick={(e) => handleOpenModel(e)}
              />
            ) : (
              <FontAwesomeIcon
                id={`setting-${keyVal}`}
                icon={faAnglesRight}
                // size="xs"
                onClick={(e) => handleOpenModel(e)}
              />
            )}
          </div>

          {/* </button> */}
        </div>
      </div>
      <ul>
        {/* <li
          id={`folder-${keyVal}`}
          className="list"
          style={{ paddingLeft: "10px" }}
        > */}
        {console.log("children: ", children)}
        {showChildren && children && children.length
          ? children.map((child) => (
              <li
                id={`folder-${keyVal}`}
                className="list"
                style={{ paddingLeft: "10px" }}
              >
                <Child
                  node={child}
                  onAddChild={(newChildLabel) => child.addChild(newChildLabel)}
                />
              </li>
            ))
          : null}
        {/* </li> */}
      </ul>
    </>
  );
}
