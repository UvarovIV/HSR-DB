import {createSlice} from "@reduxjs/toolkit";

export const enemySlice = createSlice({
    name: 'enemies',
    initialState: {
        enemies: [],
        selectedEnemy: null,
        weaknessTypes: [],
    },
    reducers: {
        set: (state, action) => {
            state.enemies = action.payload;
        },
        setSelectedEnemy: (state, action) => {
            state.selectedEnemy = action.payload;
        },
        setWeaknessTypes: (state, action) => {
            state.weaknessTypes = action.payload;
        },
    },
})

export const {
    set,
    setSelectedEnemy,
    setWeaknessTypes,
} = enemySlice.actions;

export default enemySlice.reducer;