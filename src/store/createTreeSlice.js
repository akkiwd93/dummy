const { createSlice } = require("@reduxjs/toolkit");

const createTree = createSlice({
  name: "tree",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.keyVal !== action.payload);
    },
    update(state, action) {
      return action.payload;
    },
  },
});

export const { add, remove, update } = createTree.actions;
export default createTree.reducer;
