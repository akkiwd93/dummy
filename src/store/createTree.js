const { createSlice } = require("@reduxjs/toolkit");

const createTree = createSlice({
  name: "tree",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.key !== action.payload);
    },
    status(state, action) {
      return (state = action.payload);
    },
    rename() {},
  },
});

export const { add, remove, status } = createTree.actions;
export default createTree.reducer;
