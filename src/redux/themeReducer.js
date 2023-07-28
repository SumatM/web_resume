import { getLocalFile } from "./helper";

const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: getLocalFile("resume") || {
      LtextColor: "#7B1FA2",
      RtextColor: "#00897B",
      iconColor: "#607D8B",
      backgroundTheme: "#FFA000",
      isLoading:true,
      triggerFortoggler:true
    },
  },
  reducers: {
    changeTheme: (state, action) => {
      if (action.payload) {
        state.value = action.payload;
      }
    },
    handleLoading:(state,action)=>{
      state.value.isLoading = action.payload
    },
    handleTrigger:(state,action)=>{
      state.value.triggerFortoggler  = !state.value.triggerFortoggler;
    }
  },
});

export const { changeTheme,handleLoading,handleTrigger } = themeSlice.actions;

export default themeSlice.reducer;
