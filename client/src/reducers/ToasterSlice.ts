import { createSlice } from "@reduxjs/toolkit";

const ToasterSlice = createSlice({
  name: "ToasterSlice",
  initialState: {
    isToasterOpen: false,
  },
  reducers: {
    handleToasterVisibility: (state, action) => {
      state.isToasterOpen = action.payload;
    },
  },
});

export default ToasterSlice.reducer;

export const { handleToasterVisibility } = ToasterSlice.actions;
