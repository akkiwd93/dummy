const { createSlice } = require("@reduxjs/toolkit");

const statusSlice = createSlice({
  name: "folderStat",
  initialState: { folderstatus: false },
  reducers: {
    statusVal(state, action) {
      return action.payload;
    },
  },
});

export const { statusVal } = statusSlice.actions;
export default statusSlice.reducer;
