const { configureStore } = require("@reduxjs/toolkit");
import themeReducer from './themeReducer'

export const store = configureStore({
  reducer: {
    themeReducer
  },
});

export default store;
