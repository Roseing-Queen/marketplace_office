import {configureStore} from "@reduxjs/toolkit";
import layoutReducer from './modules/layout'

const store=configureStore({
  reducer: {
    layout:layoutReducer
  },
});
export default store;
