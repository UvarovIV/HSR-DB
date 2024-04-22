import {configureStore} from '@reduxjs/toolkit'
import lightConeReducer from "./slices/lightConeSlice";
export default configureStore({
    reducer: {
        lightCones: lightConeReducer,
    },
})