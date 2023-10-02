import { useSelector, useDispatch } from "react-redux";
import { add, update } from "../store/createTreeSlice";

function useAddFolder(root, path, selected, setOpenModel) {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.tree);
  const selectedFolder = useSelector((state) => state.selectedFolder);

  const selectFolderKeyVal =
    Object.keys(selectedFolder).length &&
    `${selectedFolder.keyVal}-${selectedFolder.children.length}`;

  const childPath = Object.keys(selectedFolder).length && selectedFolder.label;

  const categoryListLen = categoryList && categoryList.length;

  let children = {
    keyVal: `${root ? categoryListLen : selectFolderKeyVal}`,
    root: root,
    path: `${root ? path + "/" : childPath + "/"}`,
    label: `cat-${root ? categoryListLen : selectFolderKeyVal}`,
    children: [],
  };

  // {
  //         keyVal: `${categoryList && categoryList.length}`,
  //         root: root,
  //         path: path,
  //         label: `cat-${categoryList && categoryList.length}`,
  //         children: [],
  //       }
  const handleAddRootFolder = () => {
    if (root) {
      dispatch(add(children));
    } else {
      let newCategoryList =
        categoryList &&
        categoryList.map((item) => {
          let clonedObject = { ...item };
          if (item.keyVal === selected) {
            clonedObject = {
              ...clonedObject,
              children: [...item.children, children],
            };
            console.log("clonedObject: ", clonedObject);
          }
          return clonedObject;
        });
      dispatch(update(newCategoryList));
      setOpenModel(false);
    }
  };
  return [handleAddRootFolder];
}

export default useAddFolder;
