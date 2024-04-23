import {configureStore} from '@reduxjs/toolkit'
import lightConeReducer from "./slices/lightConeSlice";
import characterReducer from "./slices/characterSlice";
import enemyReducer from "./slices/enemySlice";
export default configureStore({
    reducer: {
        lightCones: lightConeReducer,
        characters: characterReducer,
        enemies: enemyReducer,
    },
})