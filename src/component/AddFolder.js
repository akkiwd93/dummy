import React from "react";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

//Custom Hook
import useAddFolder from "../hooks/useAddFolder";

export function AddFolder() {
  const [handleAddRootFolder] = useAddFolder(true, "root", null, null);

  return (
    <div>
      <FontAwesomeIcon
        size="xl"
        icon={faFolderPlus}
        onClick={handleAddRootFolder}
      />
      <span> Create Folder</span>
    </div>
  );
}
