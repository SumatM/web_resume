import { getLocalFile } from "./helper";

const { createSlice } = require("@reduxjs/toolkit");


const themeSlice = createSlice({
  name: "theme",
  initialState: {
   value: getLocalFile('resume') || { LtextColor: "#7B1FA2",
   RtextColor:"#00897B",
   iconColor: "#607D8B",
   backgroundTheme: "#FFA000"}
  },
  reducers: {
    changeTheme: (state, action) => {
      if(action.payload){
        state.value = action.payload;
         }
      }
  }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
