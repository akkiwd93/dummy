const { createSlice } = require("@reduxjs/toolkit");

const statusSlice = createSlice({
  name: "folderStat",
  initialState: { folderStatus: false, rename: false, editDropdown: false },
  reducers: {
    statusVal(state, action) {
      return (state = {
        ...state,
        ...action.payload,
      });
    },
  },
});

export const { statusVal } = statusSlice.actions;
export default statusSlice.reducer;
