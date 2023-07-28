import { getLocalFile } from "./helper";

const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: getLocalFile("resume") || {
      LtextColor: "#827717",
      RtextColor: "#FBC02D",
      iconColor: "#D32F2F",
      backgroundTheme: "#212121",
      triggerFortoggler: true,
    },
  },
  reducers: {
    changeTheme: (state, action) => {
      let data = action.payload;
      console.log({...state.value,...data})
      localStorage.setItem("resume", JSON.stringify({...state.value,...data}));
      if (action.payload) {
        state.value = {...state.value,...data}
      }
    },
    handleLoading: (state, action) => {
      state.value.isLoading = action.payload;
    },
    handleTrigger: (state, action) => {
      state.value.triggerFortoggler = !state.value.triggerFortoggler;
    },
  },
});

export const { changeTheme, handleLoading, handleTrigger } = themeSlice.actions;

export default themeSlice.reducer;
