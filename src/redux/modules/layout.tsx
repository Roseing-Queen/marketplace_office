import { createSlice } from "@reduxjs/toolkit";

export const layout=createSlice({
  name: "layout",
  initialState: {
    sidebar: {
      isOpen: false,
    },
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.isOpen =!state.sidebar.isOpen;
    },
  },
});

export const { toggleSidebar } = layout.actions;

export default layout.reducer;