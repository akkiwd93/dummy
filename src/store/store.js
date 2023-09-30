import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./createTree";
import statusReducer from "./statusSlice";

const store = configureStore({
  reducer: {
    folderStat: statusReducer,
    tree: treeReducer,
  },
});
export default store;
