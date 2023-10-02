const { createSlice } = require("@reduxjs/toolkit");

const selectedFolder = createSlice({
  name: "selectedFolder",
  initialState: {},
  reducers: {
    selected(state, action) {
      return (state = {
        ...action.payload,
      });
    },
  },
});

export const { selected } = selectedFolder.actions;
export default selectedFolder.reducer;
