import { useSelector, useDispatch } from "react-redux";
import { statusVal } from "../store/statusSlice";
import { update } from "../store/createTreeSlice";

function useRenameFolder(
  inputFolderName,
  selected,
  showRenameModal,
  setOpenModel
) {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.tree);

  const handleRenameFolder = () => {
    const value = inputFolderName.current.value;
    let newCategoryList =
      categoryList &&
      categoryList.map((item) => {
        let clonedObject = { ...item };
        if (item.keyVal === selected) {
          clonedObject = { ...clonedObject, label: value };
        }
        return clonedObject;
      });

    dispatch(update(newCategoryList));
    dispatch(statusVal({ editDropdown: false }));
    showRenameModal(false);
    setOpenModel(false);
  };
  return [handleRenameFolder];
}

export default useRenameFolder;
