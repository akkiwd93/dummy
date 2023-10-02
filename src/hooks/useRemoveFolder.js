import { useDispatch } from "react-redux";
import { remove } from "../store/createTreeSlice";

function useRemoveFolder(selected, setOpenModel) {
  const dispatch = useDispatch();

  const handleRemoveFolder = () => {
    dispatch(remove(selected));
    setOpenModel(false);
  };

  return [handleRemoveFolder];
}

export default useRemoveFolder;
