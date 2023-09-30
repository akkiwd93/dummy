import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { statusVal } from "./../../store/statusSlice";
import { add } from "./../../store/createTree";

import { EditDropdown } from "../EditDropdown";
import { Tree } from "./Tree";

const fontAwesomeStyle = {
  marginRight: "6px",
};

const listDisplaySettingStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 10px",
};
const settingButtonStyle = {
  border: "none",
  backgroundColor: "transparent",
};

export function ChildNode({ node }) {
  const dispatch = useDispatch();
  const inputFolderName = useRef();
  const categoryList = useSelector((state) => state.tree);

  const { children, label, keyVal } = node;
  const folderStatus = useSelector((state) => state.folderStat);

  console.log("node: ", node);

  const [showChildren, setShowChildren] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  console.log("folderStat111111111: ", folderStatus);

  const hadleShowChildren = (val) => {
    // setSelectedNode(val);
    // dispatch(add(val));
    setShowChildren(!showChildren);
  };
  const addFolderName = () => {
    dispatch(statusVal({ folderStatus: false }));

    console.log("inputFolderName: ", inputFolderName.current.value);
    dispatch(
      add({
        keyVal: categoryList.length,
        root: true,
        // label: `cat-${categoryList.length}`,
        label: inputFolderName.current.value
          ? inputFolderName.current.value
          : `cat-${categoryList.length}`,
        children: [],
      })
    );
  };
  const handleOpenModel = (evt) => {
    setOpenModel(!openModel);
    if (evt.target.id === keyVal) {
      console.log("node.keyVal: ", keyVal);
    } else {
      console.log("node.keyValmmmmmmmmmm: ", keyVal);
    }
    console.log("node: ", keyVal, "id: ", evt.target.id);
    // console.log("................ ", elementId.current, "bbbbbbb: ", node);
  };

  return (
    <>
      {/* {console.log(
        openModel && "nfdfdslfs",
        "ChildNode children: ",
        children && children.length,
        "showChildren: ",
        showChildren
      )} */}

      <div
        onClick={() => hadleShowChildren(node)}
        style={listDisplaySettingStyle}
      >
        <span>
          {children && children.length !== 0 ? (
            showChildren ? (
              <>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  style={fontAwesomeStyle}
                />
                {label}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCirclePlus} style={fontAwesomeStyle} />
                {label}
              </>
            )
          ) : folderStatus ? (
            <>
              <input type="text" ref={inputFolderName} />
              <button onClick={addFolderName}>Add</button>
            </>
          ) : (
            <span
              style={{
                paddingLeft: "22px",
              }}
            >
              {label}
            </span>
          )}
        </span>
        {console.log("keyVal: ", keyVal)}
        <div className="dropdown">
          <button style={settingButtonStyle}>
            <FontAwesomeIcon
              id={`setting-${keyVal}`}
              // ref={elementId}
              icon={faEllipsis}
              onClick={handleOpenModel}
            />
            {openModel && <EditDropdown selected={keyVal} />}
          </button>
        </div>
      </div>
      <li className="list" style={{ paddingLeft: "10px" }}>
        {showChildren && children && children.length ? (
          <Tree categoryList={children} />
        ) : null}
      </li>
    </>
  );
}
