import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

//Redux
import { useDispatch } from "react-redux";
import { statusVal } from "../store/statusSlice";
// import { status } from "../store/createTree";
import { useSelector } from "react-redux";
import { add } from "../store/createTree";

export function AddFolder() {
  const dispatch = useDispatch();
  const folderStatus = useSelector((state) => state.folderStat);
  const categoryList = useSelector((state) => state.tree);

  // const [addFolderStatus, setAddFolderStatus] = useState(false);

  const handleAddRootFolder = () => {
    // setAddFolderStatus(true);
    dispatch(statusVal({ folderStatus: true }));
    dispatch(
      add({
        keyVal: categoryList.length,
        root: true,
        // label: `cat-${categoryList.length}`,
        label: `cat-${categoryList.length}`,
        children: [],
      })
    );
  };
  return (
    <div>
      {console.log("folderStat111111111: ", folderStatus)}
      <FontAwesomeIcon icon={faFolderPlus} onClick={handleAddRootFolder} />
    </div>
  );
}
