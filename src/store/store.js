import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./createTreeSlice";
import statusReducer from "./statusSlice";
import selectedFolderReducer from "./selectedFolderSlice";

const store = configureStore({
  reducer: {
    tree: treeReducer,
    folderStat: statusReducer,
    selectedFolder: selectedFolderReducer,
  },
});
export default store;
